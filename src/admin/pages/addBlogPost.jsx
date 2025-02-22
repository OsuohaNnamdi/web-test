import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Container, Row, Col, Offcanvas, Button, Form, Card, Spinner } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import { AdminSidebar } from "../../component/admiunSidebar";
import { Api } from "../auth/Api";
import Swal from "sweetalert2";

const AddBlogPost = () => {
  const [blogData, setBlogData] = useState({
    title: "",
    content: "",
    image: null,
    category: "",
  });
  const [showPreview, setShowPreview] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // New state for loading

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesResponse = await Api.get("/api/categories/");
        setCategories(categoriesResponse.data.results);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogData({ ...blogData, [name]: value });
  };

  const handleImageChange = (e) => {
    setBlogData({ ...blogData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading to true when the form is submitted

    const formData = new FormData();
    formData.append("title", blogData.title);
    formData.append("content", blogData.content);
    formData.append("category", blogData.category);
    if (blogData.image) {
      formData.append("image", blogData.image);
    }

    try {
      const response = await Api.post("/api/posts/create/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 201) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Blog post submitted successfully!",
        });
        setBlogData({ title: "", content: "", image: null, category: "" });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Something went wrong. Please try again.",
      });
      console.error("Error submitting blog post:", error);
    } finally {
      setIsLoading(false); // Set loading to false after the API request is completed
    }
  };

  return (
    <Container fluid className="px-3 py-4">
      <Row>
        <Col xs={12} className="d-lg-none">
          <Button variant="dark" onClick={() => setShowSidebar(true)} className="m-3">
            <FaBars size={24} />
          </Button>
        </Col>

        <Col lg={2} className="d-none d-lg-block">
          <AdminSidebar />
        </Col>

        <Offcanvas show={showSidebar} onHide={() => setShowSidebar(false)} placement="start">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Admin Blog</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <AdminSidebar />
          </Offcanvas.Body>
        </Offcanvas>

        <Col lg={10} xs={12}>
          <Container className="mt-4">
            <h3 style={{ marginTop: "70px" }} className="text-center mb-4">New Blog Post</h3>
            <Card className="p-4 shadow-sm">
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Title</Form.Label>
                  <Form.Control type="text" name="title" value={blogData.title} onChange={handleChange} placeholder="Enter blog title" required />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Upload Image</Form.Label>
                  <Form.Control type="file" accept="image/*" onChange={handleImageChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Category</Form.Label>
                  <Form.Select name="category" value={blogData.category} onChange={handleChange} required>
                    <option value="" disabled>Select a category</option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="d-flex justify-content-between align-items-center">
                    Content
                    <Button variant="outline-secondary" size="sm" onClick={() => setShowPreview(!showPreview)}>
                      {showPreview ? "Hide Preview" : "Show Preview"}
                    </Button>
                  </Form.Label>
                  <Form.Control as="textarea" name="content" value={blogData.content} onChange={handleChange} rows={10} placeholder="Write your blog post here." required />
                </Form.Group>

                <Button type="submit" variant="primary" className="w-100" disabled={isLoading}>
                  {isLoading ? (
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                  ) : (
                    "Submit Blog Post"
                  )}
                </Button>
              </Form>
            </Card>

            {showPreview && (
              <Row className="mt-5">
                <Col>
                  <h2 className="text-center mb-4">Preview</h2>
                  <Card className="p-3 shadow-sm">
                    {blogData.image && <img src={URL.createObjectURL(blogData.image)} alt="Blog" className="img-fluid mb-3" />}
                    <ReactMarkdown
                      children={blogData.content}
                      components={{
                        code({ node, inline, className, children, ...props }) {
                          const match = /language-(\w+)/.exec(className || "");
                          return !inline && match ? (
                            <SyntaxHighlighter children={String(children).replace(/\n$/, "")} style={darcula} language={match[1]} PreTag="div" {...props} />
                          ) : (
                            <code className={className} {...props}>{children}</code>
                          );
                        },
                      }}
                    />
                  </Card>
                </Col>
              </Row>
            )}
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default AddBlogPost;