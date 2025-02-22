import React from 'react';
import { socialMediaLinks } from '../data';

export const Footer = () => {
  return (
    <div>
      <footer className="page-footer dark-color-footer" id="page-footer">
        <div className="overlay-photo-image-bg" data-bg-img="assets/images/2.png" data-bg-opacity=".25" />
        <div className="container">
          <div className="row footer-cols">
            {/* Logo Column */}
            <div className="col-12 col-md-4 col-lg-4 footer-col text-center text-md-start">
              <img
                className="img-fluid footer-logo"
                loading="lazy"
                src="assets/images/2.png"
                alt="logo"
                style={{ maxWidth: '120px' }} // Reduced image size
              />
            </div>

            {/* Quick Links Column */}
            <div className="col-6 col-md-4 col-lg-2 footer-col">
              <h2 className="footer-col-title">Quick Links</h2>
              <div className="footer-col-content-wrapper">
                <ul className="footer-menu">
                  <li className="footer-menu-item">
                    <i className="bi bi-arrow-right icon" />
                    <a className="footer-menu-link" href="/about">About Us</a>
                  </li>
                  <li className="footer-menu-item">
                    <i className="bi bi-arrow-right icon" />
                    <a className="footer-menu-link" href="/service">Services</a>
                  </li>
                  <li className="footer-menu-item">
                    <i className="bi bi-arrow-right icon" />
                    <a className="footer-menu-link" href="/blog">Blogs</a>
                  </li>
                  <li className="footer-menu-item">
                    <i className="bi bi-arrow-right icon" />
                    <a className="footer-menu-link" href="/contact-us">Contact</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Support Column */}
            <div className="col-6 col-md-4 col-lg-2 footer-col">
              <h2 className="footer-col-title">Support</h2>
              <div className="footer-col-content-wrapper">
                <ul className="footer-menu">
                  <li className="footer-menu-item">
                    <i className="bi bi-arrow-right icon" />
                    <a className="footer-menu-link" href="/pricing">Pricing</a>
                  </li>
                  <li className="footer-menu-item">
                    <i className="bi bi-arrow-right icon" />
                    <a className="footer-menu-link" href="/faq">FAQs</a>
                  </li>
                  <li className="footer-menu-item">
                    <i className="bi bi-arrow-right icon" />
                    <a className="footer-menu-link" href="/project">Projects</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Us Column */}
            <div className="col-12 col-md-12 col-lg-4 footer-col">
              <h2 className="footer-col-title">Contact Us</h2>
              <div className="footer-col-content-wrapper">
                <div className="contact-info-card">
                  <i className="bi bi-envelope icon" />
                  <a className="text-lowercase info" href="mailto:syntechticsolutions@gmail.com">
                    syntechticsolutions@gmail.com
                  </a>
                </div>
                <div className="contact-info-card">
                  <i className="bi bi-geo-alt icon" />
                  <span className="info">Lasu Main Rd, Ojo, Lagos 102101.</span>
                </div>
                <div className="contact-info-card">
                  <i className="bi bi-phone icon" />
                  <a className="info" href="tel:+234 810 725 1941">+234 810 725 1941</a>
                </div>
                <div className="contact-info-card">
                  <div className="social-icons">
                    <div className="sc-wrapper dir-row sc-size-32">
                      <ul className="sc-list">
                        {socialMediaLinks.map((link, index) => (
                          <li key={index} className="sc-item" title={link.title}>
                            <a className="sc-link" href={link.url} title="social media icon">
                              <i className={link.iconClass + " sc-icon"} />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <div className="back-to-top" id="back-to-top">
        <i className="bi bi-arrow-up icon" />
      </div>
    </div>
  );
};