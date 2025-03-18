import React from 'react';
import { Testimonial } from '../component/customer-test';
import { teamMembers } from '../data';

export const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <header className="d-flex align-items-center page-hero inner-page-hero" id="page-hero">
        <div className="overlay-photo-image-bg parallax" data-bg-img="assets/images/hero/inner-page-hero.jpg" data-bg-opacity={1} />
        <div className="overlay-color" data-bg-opacity=".75" />
        <div className="container">
          <div className="hero-text-area centerd">
            <h1 className="hero-title wow fadeInUp" data-wow-delay=".2s">About SynoLoop Solutions</h1>
            <nav aria-label="breadcrumb" className="d-flex justify-content-center">
              <ul className="breadcrumb wow fadeInUp text-center" data-wow-delay=".6s">
                <li className="breadcrumb-item">
                  <a className="breadcrumb-link" href="/">
                    <i className="bi bi-house icon" /> Home &gt;
                  </a>
                  <span style={{ textDecoration: "none", color: "white", cursor: "default" }}> About Us</span>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* About Section */}
      <main className="about mega-section" id="about">
        <div className="container">
          <div className="content-block">
            <div className="row">
              <div className="col-12 col-lg-6 d-flex align-items-center order-1 order-lg-0 about-col pad-end wow fadeInUp" data-wow-delay="0.6s">
                <div className="text-area">
                  <div className="sec-heading light-title">
                    <div className="content-area">
                      <span className="pre-title wow fadeInUp" data-wow-delay=".2s">About Us</span>
                      <h2 className="title wow fadeInUp" data-wow-delay=".4s">
                        <span className="hollow-text">Trusted</span> by Worldwide Clients Since <span className="featured-text">2024.</span>
                      </h2>
                    </div>
                  </div>
                  <p className="about-text">
                    At SynoLoop Solutions, we are a team of passionate engineers and developers dedicated to delivering innovative software solutions, IT training, and reliable technical support. Founded in 2024, our mission is to empower individuals and businesses to thrive in the ever-evolving tech landscape. From custom software development to tech education, we are committed to excellence and timely results.
                  </p>
                  <div className="info-items-list">
                    <div className="row">
                      {[
                        { icon: "flaticon-medal", title: "First on Field", text: "Leading the way in creative solutions with unparalleled expertise." },
                        { icon: "flaticon-game-console", title: "Easy to Reach", text: "Always accessible and ready to respond promptly to your queries." },
                        { icon: "flaticon-map", title: "Worldwide Services", text: "Offering exceptional services to clients across the globe." },
                        { icon: "flaticon-technical-support-1", title: "24/7 Support", text: "Providing reliable, around-the-clock assistance for all your needs." },
                      ].map((item, index) => (
                        <div className="col-9 col-xl-6" key={index}>
                          <div className="info-item">
                            <i className={`${item.icon} info-icon`} />
                            <div className="info-content">
                              <h5 className="info-title">{item.title}</h5>
                              <p className="info-text">{item.text}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="cta-area">
                    <a className="btn-solid reveal-start" href="/contact-us">Get in Touch</a>
                    <div className="signature">
                      <div className="signature-img"></div>
                      <div className="signature-name">CEO & Co-Founder</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 d-flex align-items-center order-0 order-lg-1 about-col wow fadeInUp" data-wow-delay="0.2s">
                <div className="img-area" data-tilt>
                  <div className="image">
                    <img className="about-img img-fluid" loading="lazy" src="assets/images/about/1.png" alt="SynoLoop Solutions Team" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Team Section */}
      <section className="our-team mega-section" id="our-team">
        <div className="container">
          <div className="sec-heading">
            <div className="content-area">
              <span className="pre-title wow fadeInUp" data-wow-delay=".2s">Team</span>
              <h2 className="title wow fadeInUp" data-wow-delay=".4s">
                Our <span className="hollow-text">Experts</span> Team Members
              </h2>
            </div>
            <div className="cta-area wow fadeInUp" data-wow-delay=".8s">
              <a className="cta-btn btn-solid" href="/team">
                See More <i className="bi bi-arrow-right icon" />
              </a>
            </div>
          </div>
          <div className="container">
            <div className="row">
              {teamMembers.map((member, index) => (
                <div className="col-12 col-md-8 col-lg-4 mx-md-auto" key={index}>
                  <div className={`tm-member-card wow fadeInUp`} data-wow-delay={`${0.1 + index * 0.2}s`}>
                    <div className="tm-image js-tilt">
                      <a className="tm-link">
                        <div className="overlay overlay-color" />
                        <img
                          className="img-fluid parallax-img"
                          loading="lazy"
                          src={member.image}
                          alt={`${member.name}, ${member.role} at SynoLoop Solutions`}
                          style={{ width: '100%', height: '600px', objectFit: 'cover' }}
                        />
                      </a>
                    </div>
                    <div className="tm-details">
                      <a className="tm-link" href="team-member.html">
                        <h6 className="tm-name">{member.name}</h6>
                      </a>
                      <span className="tm-role">{member.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonial />
    </div>
  );
};