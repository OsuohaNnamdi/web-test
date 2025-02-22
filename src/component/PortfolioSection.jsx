import React, { useState } from "react";

const PortfolioSection = ({ onProjectClick, portfolioData }) => {
  const [activeFilter, setActiveFilter] = useState("*");

  // Function to handle filter clicks
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  // Filter items based on the active filter
  const filteredItems =
    activeFilter === "*"
      ? portfolioData.items
      : portfolioData.items.filter((item) => item.category === activeFilter);

  return (
    <section className="portfolio mega-section" id="portfolio">
      <div className="container">
        <div className="sec-heading">
          <div className="content-area">
            <span className="pre-title wow fadeInUp" data-wow-delay=".2s">
              {portfolioData.heading.preTitle}
            </span>
            <h2 className="title wow fadeInUp" data-wow-delay=".4s">
              {portfolioData.heading.title.split(" ")[0]}{" "}
              <span className="hollow-text">
                {portfolioData.heading.title.split(" ")[1]}
              </span>
            </h2>
          </div>
          <div className="cta-area wow fadeInUp" data-wow-delay=".8s">
            <a className="cta-btn btn-solid" href={portfolioData.heading.linkHref}>
              {portfolioData.heading.linkText}{" "}
              <i className="bi bi-arrow-right icon" />
            </a>
          </div>
        </div>

        <div className="portfolio-wrapper">
          <ul className="portfolio-btn-list wow fadeInUp" data-wow-delay=".2s">
            {portfolioData.categories.map((category, index) => (
              <li
                key={index}
                className={`portfolio-btn ${
                  activeFilter === category.filter ? "active" : ""
                }`}
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
                filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className={`col-12 col-md-6 col-lg-4 portfolio-item ${item.category}`}
                  >
                    <div className="item">
                      {/* Use the onProjectClick function with the project ID */}
                      <div
                        className="portfolio-img-link"
                        onClick={() => onProjectClick(item.id)}
                      >
                        <img
                          className="portfolio-img img-fluid"
                          loading="lazy"
                          src={item.image}
                          alt={item.alt}
                        />
                      </div>
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
  );
};

export default PortfolioSection;