import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GetInTouch } from '../component/getInTouch';
import { Support } from '../component/support';
import { Testimonial } from '../component/customer-test';
import { portfolioData } from '../data';

export const ProjectList = () => {
  const [activeFilter, setActiveFilter] = useState("*");
  const navigate = useNavigate();

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const handleProjectClick = (id) => {
    console.log("Navigating to project ID:", id); // Debugging
    navigate(`/project/${id}`);
  };

  const filteredItems = portfolioData.items.filter(
    (item) => activeFilter === "*" || item.category === activeFilter
  );

  return (
    <div>
      {/* Page Header and Hero Section */}
      <section className="d-flex align-items-center page-hero inner-page-hero" id="page-hero">
        <div className="overlay-photo-image-bg parallax" data-bg-img="assets/images/hero/inner-page-hero.jpg" data-bg-opacity={1} />
        <div className="overlay-color" data-bg-opacity=".75" />
        <div className="container">
          <div className="hero-text-area centerd">
            <h1 className="hero-title wow fadeInUp" data-wow-delay=".2s">Projects</h1>
            <div className="d-flex justify-content-center">
          <nav aria-label="breadcrumb">
            <ul className="breadcrumb wow fadeInUp text-center" data-wow-delay=".6s">
              <li className="breadcrumb-item">
                <a className="breadcrumb-link" href="/">
                  <i className="bi bi-house icon" /> home &gt;
                </a>
                <span style={{ textDecoration: "none", color: "white", cursor: "default" }}> Projects</span>
              </li>
            </ul>
          </nav>
        </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio mega-section" id="portfolio">
        <div className="container">
          <div className="sec-heading">
            <div className="content-area">
              <span className="pre-title wow fadeInUp" data-wow-delay=".2s">
                {portfolioData.heading.preTitle}
              </span>
              <h2 className="title wow fadeInUp" data-wow-delay=".4s">
                {portfolioData.heading.title.split(" ")[0]}{" "}
                <span className="hollow-text">{portfolioData.heading.title.split(" ")[1]}</span>
              </h2>
            </div>
            <div className="cta-area wow fadeInUp" data-wow-delay=".8s">
              <a className="cta-btn btn-solid" href={portfolioData.heading.linkHref}>
                {portfolioData.heading.linkText} <i className="bi bi-arrow-right icon" />
              </a>
            </div>
          </div>

          <div className="portfolio-wrapper">
            <ul className="portfolio-btn-list wow fadeInUp" data-wow-delay=".2s">
              {portfolioData.categories.map((category, index) => (
                <li
                  key={index}
                  className={`portfolio-btn ${activeFilter === category.filter ? "active" : ""}`}
                  data-filter={category.filter}
                  onClick={() => handleFilterClick(category.filter)}
                >
                  {category.name}
                </li>
              ))}
            </ul>

            <div className="portfolio-group wow fadeIn" data-wow-delay=".4s">
              <div className="row">
                {filteredItems.length > 0 ? (
                  filteredItems.map((item, index) => (
                    <div
                      key={index}
                      className={`col-12 col-md-6 col-lg-4 portfolio-item ${item.category}`}
                      onClick={() => handleProjectClick(item.id)}
                    >
                      <div className="item">
                        <a className="portfolio-img-link">
                          <img
                            className="portfolio-img img-fluid"
                            loading="lazy"
                            src={item.image}
                            alt={item.alt}
                          />
                        </a>
                        <div className="item-info">
                          <h3 className="item-title">{item.title}</h3>
                          <i className="bi bi-arrow-right icon" />
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No projects found for this category</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonial />
      <Support />
      <GetInTouch />
    </div>
  );
};