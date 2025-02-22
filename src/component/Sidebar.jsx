import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";

export const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  const handleLinkClick = () => {
    closeSidebar(); 
  };

  return (
    <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
      <ul className="sidebar-links">
        <li>
          <NavLink to="/" activeClassName="active" onClick={handleLinkClick}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active" onClick={handleLinkClick}>
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/service" activeClassName="active" onClick={handleLinkClick}>
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/all-project" activeClassName="active" onClick={handleLinkClick}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" activeClassName="active" onClick={handleLinkClick}>
            Blogs
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact-us" activeClassName="active" onClick={handleLinkClick}>
            Contact Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/faq" activeClassName="active" onClick={handleLinkClick}>
            FAQ
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
