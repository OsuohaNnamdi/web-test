import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaPlus, FaEye, FaBars } from "react-icons/fa";
import Swal from "sweetalert2";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Container, Row, Col, Offcanvas, Button } from "react-bootstrap";
import { AdminSidebar } from "../../component/admiunSidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Api } from "../auth/Api";

export const AdminBlog = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const [categories, setCategories] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch posts and categories from the backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsResponse = await Api.get("/api/posts/");
        setPosts(postsResponse.data.results);

        const categoriesResponse = await Api.get("/api/categories/");
        setCategories(categoriesResponse.data.results);

        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handle editing a post
  const handleEdit = (post) => {
    setSelectedPost(post);
    setShowPreview(false);
    document.getElementById("editModalTrigger").click();
  };

  // Handle updating a post
  const handleUpdate = async () => {
    try {
      const updatedPost = {
        id: selectedPost.id,
        title: selectedPost.title,
        content: selectedPost.content,
        author: selectedPost.author,
        category: selectedPost.category,
        created_at: selectedPost.created_at,
      };
      console.log("Payload being sent:", updatedPost); // Debugging
      const response = await Api.put(`/api/posts/${selectedPost.id}/`, updatedPost);
      setPosts(posts.map((p) => (p.id === selectedPost.id ? response.data : p)));
      document.getElementById("editModalClose").click();
      Swal.fire("Updated!", "Your post has been updated.", "success");
    } catch (err) {
      console.error("Error updating post:", err.response?.data || err.message); // Debugging
      if (err.response?.data) {
        // Handle specific errors if needed
      } else {
        Swal.fire("Error!", "Failed to update the post.", "error");
      }
    }
  };

  // Handle deleting a post
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won’t be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await Api.delete(`/api/posts/${id}/`);
          setPosts(posts.filter((post) => post.id !== id));
          Swal.fire("Deleted!", "Your post has been deleted.", "success");
        } catch (err) {
          Swal.fire("Error!", "Failed to delete the post.", "error");
          console.error(err);
        }
      }
    });
  };

  // Helper function to get category name by ID
  const getCategoryName = (category) => {
    if (typeof category === "object") {
      return category.name; // If category is an object, return its name
    } else {
      const foundCategory = categories.find((cat) => cat.id === category);
      return foundCategory ? foundCategory.name : "Unknown Category"; // If category is an ID, find the name
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Container fluid>
      <Row>
        {/* Sidebar Toggle Button (Hamburger Icon) */}
        <Col xs={12} className="d-lg-none">
          <Button variant="dark" onClick={() => setShowSidebar(true)} className="m-3">
            <FaBars size={24} />
          </Button>
        </Col>

        {/* Sidebar for Larger Screens */}
        <Col lg={2} className="d-none d-lg-block">
          <AdminSidebar />
        </Col>

        {/* Sidebar for Mobile */}
        <Offcanvas show={showSidebar} onHide={() => setShowSidebar(false)} placement="start">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Admin Blog</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <AdminSidebar />
          </Offcanvas.Body>
        </Offcanvas>

        {/* Main Content */}
        <Col lg={10} xs={12}>
          <Container className="mt-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h3 style={{ marginTop: "50px" }}>BLOG POSTS</h3>
              <button
                className="btn btn-primary"
                style={{ marginTop: "50px" }}
                onClick={() => (window.location.href = "/add-blog")}
              >
                <FaPlus /> Add New Blog
              </button>
            </div>

            <div className="table-responsive">
              <table className="table table-striped table-bordered">
                <thead className="table-dark">
                  <tr>
                    <th>Title</th>
                    <th>Content</th>
                    <th>Author</th>
                    <th>Category</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {posts.map((post) => (
                    <tr key={post.id}>
                      <td>{post.title}</td>
                      <td>{post.content.split(".")[0]}.</td>
                      <td>{typeof post.author === "object" ? post.author.username : post.author}</td>
                      <td>{getCategoryName(post.category)}</td> {/* Use helper function here */}
                      <td>
                        <button
                          className="btn btn-warning btn-sm me-2"
                          onClick={() => handleEdit(post)}
                        >
                          <FaEdit /> Edit
                        </button>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(post.id)}
                        >
                          <FaTrash /> Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Edit Modal */}
            <button
              id="editModalTrigger"
              className="d-none"
              data-bs-toggle="modal"
              data-bs-target="#editModal"
            ></button>
            <div className="modal fade" id="editModal" tabIndex="-1" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Edit Post</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                  </div>
                  <div className="modal-body">
                    {selectedPost && (
                      <>
                        {/* Title Field */}
                        <div className="mb-3">
                          <label className="form-label">Title</label>
                          <input
                            type="text"
                            className="form-control"
                            value={selectedPost.title}
                            onChange={(e) =>
                              setSelectedPost({ ...selectedPost, title: e.target.value })
                            }
                          />
                        </div>

                        {/* Author Field */}
                        <div className="mb-3">
                          <label className="form-label">Author</label>
                          <input
                            type="text"
                            className="form-control"
                            value={selectedPost.author || ""}
                            onChange={(e) =>
                              setSelectedPost({
                                ...selectedPost,
                                author: { ...selectedPost.author, username: e.target.value },
                              })
                            }
                          />
                        </div>

                        {/* Content Field with Preview */}
                        <div className="mb-3">
                          <label className="form-label d-flex justify-content-between">
                            Content
                            <button
                              className="btn btn-sm btn-outline-secondary"
                              onClick={() => setShowPreview(!showPreview)}
                            >
                              <FaEye /> {showPreview ? "Hide Preview" : "Show Preview"}
                            </button>
                          </label>
                          <textarea
                            className="form-control"
                            rows="4"
                            value={selectedPost.content}
                            onChange={(e) =>
                              setSelectedPost({ ...selectedPost, content: e.target.value })
                            }
                          />
                          {/* Markdown Preview */}
                          {showPreview && (
                            <div className="card bg-dark text-light p-3 mt-3">
                              <h6>Preview:</h6>
                              <ReactMarkdown
                                components={{
                                  code({ node, inline, className, children, ...props }) {
                                    return !inline ? (
                                      <SyntaxHighlighter style={darcula} language="javascript" PreTag="div" {...props}>
                                        {String(children).replace(/\n$/, "")}
                                      </SyntaxHighlighter>
                                    ) : (
                                      <code className={className} {...props}>
                                        {children}
                                      </code>
                                    );
                                  },
                                }}
                              >
                                {selectedPost.content}
                              </ReactMarkdown>
                            </div>
                          )}
                        </div>

                        {/* Category Field */}
                        <div className="mb-3">
                          <label className="form-label">Category</label>
                          <select
                            className="form-select"
                            value={selectedPost.category?.name || ""}
                            onChange={(e) =>
                              setSelectedPost({
                                ...selectedPost,
                                category: { ...selectedPost.category, name: e.target.value },
                              })
                            }
                          >
                            {categories.map((cat) => (
                              <option key={cat.id} value={cat.name}>
                                {cat.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" id="editModalClose" data-bs-dismiss="modal">
                      Close
                    </button>
                    <button type="button" className="btn btn-primary" onClick={handleUpdate}>
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};