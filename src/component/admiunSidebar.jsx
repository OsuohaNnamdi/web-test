import { useState } from "react";
import { Navbar, Nav, Dropdown, Container } from "react-bootstrap";
import { FaHome, FaUsers, FaNewspaper, FaCog, FaUserCircle, FaBars, FaPlus, FaSuperpowers } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const AdminSidebar = () => {
  const [expanded, setExpanded] = useState(false);


  const navigate = useNavigate();


  const handleLogout = () => {
    
    sessionStorage.removeItem("isAuthenticated");
    sessionStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      {/* Top Navbar */}
      <Navbar
        expand="lg"
        bg="dark"
        variant="dark"
        className="px-3 w-100"
        style={{ position: "fixed", top: 0, left: 0, zIndex: 1050 }}
      >
        <Container fluid className="d-flex justify-content-between align-items-center">
          {/* Hamburger & Brand */}
          <div className="d-flex align-items-center">
            <Navbar.Toggle
              aria-controls="sidebar"
              onClick={() => setExpanded(!expanded)}
              className="border-0"
            >
              <FaBars size={24} className="text-white" />
            </Navbar.Toggle>
          </div>

          {/* Profile Circle (Moves based on screen size) */}
          <Dropdown className="ms-auto">
            <Dropdown.Toggle
              variant="dark"
              id="profile-dropdown"
              className="d-flex align-items-center border-0 bg-transparent text-white"
            >
              <FaUserCircle size={40} />
            </Dropdown.Toggle>
            <Dropdown.Menu align="end">
              <Dropdown.Item href="/profile">My Profile</Dropdown.Item>
              <Dropdown.Item onClick={handleLogout} className="text-danger">
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>

      {/* Sidebar */}
      <Navbar
        expand="lg"
        className={`d-flex flex-column bg-dark text-white vh-100 p-3 ${
          expanded ? "show" : ""
        }`}
        id="sidebar"
        style={{ width: "250px", position: "fixed", left: 0, top: "56px" }}
      >
        <Navbar.Brand className="text-white fs-4 fw-bold mb-4">
          Admin Dashboard
        </Navbar.Brand>
        <Nav className="flex-column w-100">
          <Nav.Item className="mb-4">
            <Nav.Link href="/admin" className="text-white d-flex align-items-center p-3">
              <FaHome className="me-3" /> Dashboard
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="mb-4">
            <Nav.Link href="/add-blog" className="text-white d-flex align-items-center p-3">
              <FaPlus  className="me-3"/> Create Post
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="mb-4">
            <Nav.Link href="/admin-category" className="text-white d-flex align-items-center p-3">
              <FaSuperpowers className="me-3" /> Category
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="mb-4">
            <Nav.Link href="/admin-blog" className="text-white d-flex align-items-center p-3">
              <FaNewspaper className="me-3" /> Posts
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="mb-4">
            <Nav.Link href="/users" className="text-white d-flex align-items-center p-3">
              <FaUsers className="me-3" /> Users
            </Nav.Link>
          </Nav.Item>
          
        </Nav>
      </Navbar>
    </>
  );
};
