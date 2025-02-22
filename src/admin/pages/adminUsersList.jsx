import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaPlus, FaBars, FaArrowLeft, FaSpinner } from "react-icons/fa";
import Swal from "sweetalert2";
import { Container, Row, Col, Offcanvas, Button } from "react-bootstrap";
import { AdminSidebar } from "../../component/admiunSidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Api } from "../auth/Api";

export const AdminUserList = () => {
  const [users, setUsers] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState({}); // Track loading state for delete by user ID
  const [promoteLoading, setPromoteLoading] = useState({}); // Track loading state for promote by user ID

  // Fetch posts and categories from the backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsResponse = await Api.get("/user/admin/users/");
        setUsers(postsResponse.data.results);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handle deleting a post
  const handleDelete = async (id) => {
    setDeleteLoading((prev) => ({ ...prev, [id]: true })); // Set loading for this specific user
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
          await Api.delete(`/user/admin/users/${id}/`);
          setUsers(users.filter((user) => user.id !== id));
          Swal.fire("Deleted!", "Your post has been deleted.", "success");
        } catch (err) {
          Swal.fire("Error!", "Failed to delete the post.", "error");
          console.error(err);
        } finally {
          setDeleteLoading((prev) => ({ ...prev, [id]: false })); // Reset loading for this specific user
        }
      } else {
        setDeleteLoading((prev) => ({ ...prev, [id]: false })); // Reset loading if user cancels
      }
    });
  };

  // Handle promoting a user to admin
  const handlePromote = async (id) => {
    setPromoteLoading((prev) => ({ ...prev, [id]: true })); // Set loading for this specific user
    try {
      await Api.patch(`/user/admin/users/${id}/promote/`);
      Swal.fire("Promoted!", "The user has been promoted to admin.", "success");
      // Optionally, you can refresh the user list or update the user's role in the state
    } catch (err) {
      Swal.fire("Error!", "Failed to promote the user.", "error");
      console.error(err);
    } finally {
      setPromoteLoading((prev) => ({ ...prev, [id]: false })); // Reset loading for this specific user
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#f8f9fa",
          color: "#343a40",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <h1 style={{ fontSize: "3em", fontWeight: "bold", marginBottom: "20px" }}>
          You are not a super administrator!
        </h1>
        <p style={{ fontSize: "1.2em", marginBottom: "30px" }}>
          You to have unlocked super administrator privileges from the CTO.
        </p>
        <Button
          variant="primary"
          size="lg"
          onClick={() => (window.location.href = "/admin")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <FaArrowLeft /> Go Back to Admin Dashboard
        </Button>
      </div>
    );
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
              <h3>BLOG POSTS</h3>
              <button className="btn btn-primary" onClick={() => (window.location.href = "/add-blog")}>
                <FaPlus /> Add New Blog
              </button>
            </div>

            <div className="table-responsive">
              <table className="table table-striped table-bordered">
                <thead className="table-dark">
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td>{user.first_name}</td>
                      <td>{user.last_name}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>
                        <button
                          className="btn btn-success btn-sm me-2"
                          onClick={() => handlePromote(user.id)}
                          disabled={promoteLoading[user.id]} // Disable only this button
                        >
                          {promoteLoading[user.id] ? (
                            <>
                              <FaSpinner className="spinner" /> Promoting...
                            </>
                          ) : (
                            "Be An Admin"
                          )}
                        </button>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(user.id)}
                          disabled={deleteLoading[user.id]} // Disable only this button
                        >
                          {deleteLoading[user.id] ? (
                            <>
                              <FaSpinner className="spinner" /> Deleting...
                            </>
                          ) : (
                            <>
                              <FaTrash /> Delete
                            </>
                          )}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};