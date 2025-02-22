import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

export const Navbar = ({ toggleSidebar, closeSidebar }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  const handleLinkClick = () => {
    closeSidebar(); // Close the sidebar when a link is clicked
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    document.body.classList.toggle("dark-theme", !darkMode);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Set the initial theme
    document.body.classList.add("dark-theme");

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${darkMode ? "dark-theme" : "light-theme"}`}>
      <div
        className={`page-header content-always-light header-basic ${
          scrolling ? "scrolled" : ""
        }`}
        id="page-header"
      >
        <div className="container">
          <nav className="menu-navbar">
            <div className="header-logo">
              <a className="logo-link" href="/">
                <img
                  className="logo-img light-logo"
                  loading="lazy"
                  src="assets/images/1.png"
                  alt="logo"
                />
                <img
                  className="logo-img dark-logo"
                  loading="lazy"
                  src="assets/images/2.png"
                  alt="logo"
                />
              </a>
            </div>
            <div className={`links menu-wrapper`}>
              <ul className="list-js links-list">
                <li className="menu-item">
                  <NavLink
                    className="menu-link"
                    to="/"
                    activeClassName="active"
                    onClick={handleLinkClick}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="menu-item">
                  <NavLink
                    className="menu-link"
                    to="/about"
                    activeClassName="active"
                    onClick={handleLinkClick}
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="menu-item">
                  <NavLink
                    className="menu-link"
                    to="/service"
                    activeClassName="active"
                    onClick={handleLinkClick}
                  >
                    Services
                  </NavLink>
                </li>
                <li className="menu-item">
                  <NavLink
                    className="menu-link"
                    to="/all-project"
                    activeClassName="active"
                    onClick={handleLinkClick}
                  >
                    Projects
                  </NavLink>
                </li>
                <li className="menu-item">
                  <NavLink
                    className="menu-link"
                    to="/blog"
                    activeClassName="active"
                    onClick={handleLinkClick}
                  >
                    Blogs
                  </NavLink>
                </li>
                <li
                  className="menu-item has-sub-menu"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <NavLink
                    className="menu-link"
                    activeClassName="active"
                    
                  >
                    More
                  </NavLink>
                  <ul className={`sub-menu ${dropdownOpen ? "show" : ""}`}>
                    
                    <li className="menu-item sub-menu-item">
                      <NavLink
                        className="menu-link sub-menu-link"
                        to="/contact-us"
                        onClick={handleLinkClick}
                      >
                        Contact
                      </NavLink>
                    </li>
                    <li className="menu-item sub-menu-item">
                      <NavLink
                        className="menu-link sub-menu-link"
                        to="/faq"
                        onClick={handleLinkClick}
                      >
                        FAQ
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="controls-box">
              {/* Menu Toggler button */}
              <div className="control menu-toggler" onClick={toggleSidebar}>
                <span />
                <span />
                <span />
              </div>
              {/* Dark/Light mode button */}
              <div className="mode-switcher" onClick={toggleDarkMode}>
                {darkMode ? (
                  <div className="switch-inner go-light" title="Switch To Light Mode">
                    <i className="bi bi-sun icon" />
                  </div>
                ) : (
                  <div className="switch-inner go-dark" title="Switch To Dark Mode">
                    <i className="bi bi-moon icon" />
                  </div>
                )}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};
