import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { About } from "./pages/about";
import { Blog } from "./pages/blog";
import { Contact } from "./pages/contact";
import { Footer } from "./pages/footer";
import { Error } from "./pages/error";
import { ProjectList } from "./pages/project-list";
import { Project } from "./pages/project";
import { SingleBlog } from "./pages/single-blog";
import { FAQ } from "./pages/faq";
import { HomePage } from "./pages/HomePage";
import { Navbar } from "./pages/navbar";
import { Service } from "./pages/service";
import { SingleService } from "./pages/single-service";
import { Sidebar } from "./component/Sidebar";
import { Login } from "./admin/auth/login";
import AddBlogPost from "./admin/pages/addBlogPost";
import AdminDashboard from "./admin/pages/adminDashboard";
import { AdminBlog } from "./admin/pages/adminBlogs";
import ProfilePage from "./admin/pages/profilePage";
import { AdminUserList } from "./admin/pages/adminUsersList";
import { AdminCategoryList } from "./admin/pages/adminCategoryList";

function App() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Initialize as false

  const storedAuth = sessionStorage.getItem("isAuthenticated");

  useEffect(() => {
    if (storedAuth === "true") {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [storedAuth]);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const hideNavbarFooter =
    location.pathname.startsWith("/project/") ||
    location.pathname === "/error" ||
    location.pathname === "/auth" ||
    location.pathname === "/admin" ||
    location.pathname === "/admin-blog" ||
    location.pathname === "/profile" ||
    location.pathname === "/admin-category" ||
    location.pathname === "/users" ||
    location.pathname === "/add-blog";

  const ProtectedRoute = ({ children }) => {
    if (storedAuth !== "true") {
      return <Navigate to="/auth" replace />;
    }
    return children;
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
    sessionStorage.removeItem("token");
  };

  return (
    <div className="App">
      {!hideNavbarFooter && <Navbar toggleSidebar={toggleSidebar} />}
      <Sidebar sidebarOpen={sidebarOpen} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<AdminUserList />} />
        <Route path="/admin-category" element={<AdminCategoryList />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/project/:projectId" element={<Project />} />
        <Route path="/auth" element={<Login onLogin={handleLogin} />} />
        <Route path="/service/:serviceId" element={<SingleService />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/service" element={<Service />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/blog/:blogId" element={<SingleBlog />} />
        <Route path="/all-project" element={<ProjectList />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Navigate to="/error" />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard onLogout={handleLogout} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/users"
          element={
            <ProtectedRoute>
              <AdminUserList onLogout={handleLogout} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-category"
          element={
            <ProtectedRoute>
              <AdminCategoryList onLogout={handleLogout} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-blog"
          element={
            <ProtectedRoute>
              <AdminBlog onLogout={handleLogout} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage onLogout={handleLogout} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-blog"
          element={
            <ProtectedRoute>
              <AddBlogPost onLogout={handleLogout} />
            </ProtectedRoute>
          }
        />
      </Routes>
      {!hideNavbarFooter && <Footer />}
    </div>
  );
}

export default function MainApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}