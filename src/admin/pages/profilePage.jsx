import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Spinner, Offcanvas } from "react-bootstrap";
import { FaUser, FaEnvelope, FaCrown, FaBars } from "react-icons/fa";
import { Api } from "../auth/Api";
import { AdminSidebar } from "../../component/admiunSidebar";

const ProfilePage = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await Api.get("/user/profile/"); // Replace with your actual endpoint
        setProfileData(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch profile data.");
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  if (loading) {
    return (
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  if (error) {
    return (
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <p style={{ color: "red" }}>{error}</p>
      </Container>
    );
  }

  return (
    <Container fluid style={{ paddingLeft: 0, paddingRight: 0, marginTop: 50}}>
      <Row>
        {/* Sidebar Toggle Button (Hamburger Icon) */}
        <Col xs={12} className="d-lg-none">
          <Button
            variant="dark"
            onClick={() => setShowSidebar(true)}
            style={{ margin: "1rem" }}
          >
            <FaBars size={24} />
          </Button>
        </Col>

        {/* Sidebar for Larger Screens */}
        <Col lg={2} className="d-none d-lg-block">
          <AdminSidebar />
        </Col>

        {/* Sidebar for Mobile */}
        <Offcanvas
          show={showSidebar}
          onHide={() => setShowSidebar(false)}
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Admin Dashboard</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <AdminSidebar />
          </Offcanvas.Body>
        </Offcanvas>

        {/* Profile Content */}
        <Col lg={10} xs={12}>
          <Container style={{ marginTop: "3rem", marginBottom: "3rem" }}>
            <Row className="justify-content-center">
              <Col md={8} lg={6}>
                <Card style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
                  <Card.Body style={{ textAlign: "center" }}>
                    {/* Profile Header */}
                    <div
                      style={{
                        background: "linear-gradient(135deg, #6a11cb, #2575fc)",
                        padding: "2rem",
                        borderRadius: "10px 10px 0 0",
                        color: "white",
                      }}
                    >
                      <div
                        style={{
                          width: "100px",
                          height: "100px",
                          margin: "0 auto",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: "rgba(255, 255, 255, 0.1)",
                          borderRadius: "50%",
                        }}
                      >
                        <FaUser size={64} style={{ color: "white" }} />
                      </div>
                      <h2 style={{ marginTop: "1rem" }}>
                        {profileData.first_name} {profileData.last_name}
                      </h2>
                      <p style={{ color: "rgba(255, 255, 255, 0.8)" }}>
                        @{profileData.username}
                      </p>
                      {profileData.is_admin && (
                        <span
                          style={{
                            backgroundColor: "#ffc107",
                            color: "black",
                            padding: "0.25rem 0.5rem",
                            borderRadius: "5px",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.5rem",
                          }}
                        >
                          <FaCrown /> Admin
                        </span>
                      )}
                    </div>

                    {/* Profile Details */}
                    <div style={{ padding: "2rem" }}>
                      <Row style={{ marginBottom: "1rem" }}>
                        <Col>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginBottom: "1rem",
                            }}
                          >
                            <FaEnvelope style={{ marginRight: "0.5rem" }} />
                            <strong style={{ marginRight: "8px" }}>Email: </strong> {profileData.email}
                          </div>
                        </Col>
                      </Row>

                      <Row style={{ marginBottom: "1rem" }}>
                        <Col>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginBottom: "1rem",
                            }}
                          >
                            <FaUser style={{ marginRight: "0.5rem" }} />
                            <strong style={{ marginRight: "8px" }}>Username: </strong> {profileData.username}
                          </div>
                        </Col>
                      </Row>

                      <Row style={{ marginBottom: "1rem" }}>
                        <Col>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginBottom: "1rem",
                            }}
                          >
                            <FaUser style={{ marginRight: "0.5rem" }} />
                            <strong style={{ marginRight: "8px" }}>Full Name:</strong> {profileData.first_name}{" "}
                            {profileData.last_name}
                          </div>
                        </Col>
                      </Row>
                    </div>

                    {/* Edit Profile Button */}
                    <Button
                      variant="primary"
                      style={{ marginTop: "1.5rem", width: "100%" }}
                    >
                      Edit Profile
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;