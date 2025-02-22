import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Row, Col, Container, Offcanvas, Button } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

import { FaBars } from "react-icons/fa"; // Import the hamburger icon
import { AdminSidebar } from "../../component/admiunSidebar";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    activeUsers: 0,
    totalPosts: 0,
    newUsersToday: 0,
    revenue: 0,
  });

  const [showSidebar, setShowSidebar] = useState(false); // Sidebar visibility state

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get("/api/admin/stats");
        setStats(response.data);
      } catch (error) {
        console.error("Error fetching stats", error);
      }
    };
    fetchStats();
  }, []);

  const chartData = {
    labels: ["Total Users", "Active Users", "Total Posts", "New Users Today"],
    datasets: [
      {
        label: "Count",
        data: [stats.totalUsers, stats.activeUsers, stats.totalPosts, stats.newUsersToday],
        backgroundColor: ["#007bff", "#28a745", "#ffc107", "#dc3545"],
      },
    ],
  };

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
            <Offcanvas.Title>Admin Dashboard</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <AdminSidebar />
          </Offcanvas.Body>
        </Offcanvas>

        {/* Main Content */}
        <Col lg={10} xs={12}>
          <Container className="mt-4">
            <h1 className="mb-4 text-center">Dashboard</h1>
            <Row>
              <Col xs={12} sm={6} md={3} className="mb-4">
                <Card className="shadow">
                  <Card.Body>
                    <Card.Title>Total Users</Card.Title>
                    <Card.Text as="h4">{stats.totalUsers}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} sm={6} md={3} className="mb-4">
                <Card className="shadow">
                  <Card.Body>
                    <Card.Title>Active Users</Card.Title>
                    <Card.Text as="h4">{stats.activeUsers}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} sm={6} md={3} className="mb-4">
                <Card className="shadow">
                  <Card.Body>
                    <Card.Title>Total Blog Posts</Card.Title>
                    <Card.Text as="h4">{stats.totalPosts}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} sm={6} md={3} className="mb-4">
                <Card className="shadow">
                  <Card.Body>
                    <Card.Title>New Users Today</Card.Title>
                    <Card.Text as="h4">{stats.newUsersToday}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col xs={12}>
                <Card className="shadow">
                  <Card.Body>
                    <Card.Title>User Statistics</Card.Title>
                    <Bar data={chartData} />
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

export default AdminDashboard;
