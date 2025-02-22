import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaPlus, FaBars, FaArrowLeft, FaSpinner } from "react-icons/fa";
import Swal from "sweetalert2";
import { Container, Row, Col, Offcanvas, Button, Modal, Form } from "react-bootstrap";
import { AdminSidebar } from "../../component/admiunSidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Api } from "../auth/Api";

export const AdminCategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState({}); // Track loading state for delete by category ID
  const [showAddModal, setShowAddModal] = useState(false); // State for add category modal
  const [showEditModal, setShowEditModal] = useState(false); // State for edit category modal
  const [selectedCategory, setSelectedCategory] = useState(null); // Selected category for editing
  const [newCategoryName, setNewCategoryName] = useState(""); // State for new category name

  // Fetch categories from the backend
  useEffect(() => {
    const fetchData = async () => {
      try {
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

  // Handle deleting a category
  const handleDelete = async (id) => {
    setDeleteLoading((prev) => ({ ...prev, [id]: true })); // Set loading for this specific category
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
          await Api.delete(`/api/categories/${id}/`);
          setCategories(categories.filter((category) => category.id !== id));
          Swal.fire("Deleted!", "The category has been deleted.", "success");
        } catch (err) {
          Swal.fire("Error!", "Failed to delete the category.", "error");
          console.error(err);
        } finally {
          setDeleteLoading((prev) => ({ ...prev, [id]: false })); // Reset loading for this specific category
        }
      } else {
        setDeleteLoading((prev) => ({ ...prev, [id]: false })); // Reset loading if user cancels
      }
    });
  };

  // Handle opening the add category modal
  const handleAddCategory = () => {
    setShowAddModal(true);
  };

  // Handle opening the edit category modal
  const handleEditCategory = (category) => {
    setSelectedCategory(category);
    setNewCategoryName(category.name);
    setShowEditModal(true);
  };

  // Handle submitting the add category form
  const handleAddSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Api.post("/api/categories/create/", { name: newCategoryName });
      setCategories([...categories, response.data]);
      setShowAddModal(false);
      setNewCategoryName("");
      Swal.fire("Success!", "Category added successfully.", "success");
    } catch (err) {
      Swal.fire("Error!", "Failed to add the category.", "error");
      console.error(err);
    }
  };

  // Handle submitting the edit category form
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Api.put(`/api/categories/${selectedCategory.id}/`, { name: newCategoryName });
      setCategories(
        categories.map((category) =>
          category.id === selectedCategory.id ? { ...category, name: newCategoryName } : category
        )
      );
      setShowEditModal(false);
      setNewCategoryName("");
      Swal.fire("Success!", "Category updated successfully.", "success");
    } catch (err) {
      Swal.fire("Error!", "Failed to update the category.", "error");
      console.error(err);
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
              <h3 style={{marginTop: "50px"}}>CATEGORIES</h3>
              <Button style={{marginTop: "50px"}} variant="primary" onClick={handleAddCategory}>
                <FaPlus /> Add Category
              </Button>
            </div>

            <div className="table-responsive">
              <table className="table table-striped table-bordered">
                <thead className="table-dark">
                  <tr>
                    <th>Name</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((category) => (
                    <tr key={category.id}>
                      <td>{category.name}</td>
                      <td>
                        <Button
                          variant="warning"
                          size="sm"
                          className="me-2"
                          onClick={() => handleEditCategory(category)}
                        >
                          <FaEdit /> Edit
                        </Button>
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => handleDelete(category.id)}
                          disabled={deleteLoading[category.id]}
                        >
                          {deleteLoading[category.id] ? (
                            <>
                              <FaSpinner className="spinner" /> Deleting...
                            </>
                          ) : (
                            <>
                              <FaTrash /> Delete
                            </>
                          )}
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Container>
        </Col>
      </Row>

      {/* Add Category Modal */}
      <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAddSubmit}>
            <Form.Group controlId="categoryName">
              <Form.Label>Category Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter category name"
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Add
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Edit Category Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleEditSubmit}>
            <Form.Group controlId="editCategoryName">
              <Form.Label>Category Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter category name"
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};