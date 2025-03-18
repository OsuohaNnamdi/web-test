import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Api } from "../admin/auth/Api";

export const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]); // State to store fetched blog posts
  const [categories, setCategories] = useState([]); // State to store fetched categories
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [error, setError] = useState(null); // State to manage errors
  const [searchQuery, setSearchQuery] = useState(""); // State to manage search query
  const [selectedCategory, setSelectedCategory] = useState(null); // State to track selected category
  const navigate = useNavigate(); // Hook for navigation

  // Fetch all blog posts and categories from the backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch blog posts with search query if applicable
        const postsResponse = await Api.get(`/api/posts/?search=${searchQuery}`);
        setBlogPosts(postsResponse.data.results);

        // Fetch categories
        const categoriesResponse = await Api.get("/api/categories/");
        setCategories(categoriesResponse.data.results);

        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [searchQuery]); // Re-fetch data when searchQuery changes

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle search form submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Trigger the useEffect to re-fetch data with the new search query
  };

  // Handle click on a blog post
  const handleBlogClick = (blogId) => {
    navigate(`/blog/${blogId}`);
  };

  // Handle click on a category
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Filter blog posts based on the selected category
  const filteredPosts = selectedCategory
    ? blogPosts.filter((post) => post.category_name === selectedCategory.name)
    : blogPosts;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
    <section className="d-flex align-items-center page-hero inner-page-hero" id="page-hero">
    <div className="overlay-photo-image-bg parallax" data-bg-img="assets/images/hero/inner-page-hero.jpg" data-bg-opacity={1} />
    <div className="overlay-color" data-bg-opacity=".75" />
    <div className="container">
      <div className="hero-text-area centerd">
        <h1 className="hero-title wow fadeInUp" data-wow-delay=".2s">BLOGS</h1>
        <div className="d-flex justify-content-center">
          <nav aria-label="breadcrumb">
            <ul className="breadcrumb wow fadeInUp text-center" data-wow-delay=".6s">
              <li className="breadcrumb-item">
                <a className="breadcrumb-link" href="/">
                  <i className="bi bi-house icon" /> home &gt;
                </a>
                <span style={{ textDecoration: "none", color: "white", cursor: "default" }}> Blogs</span>
              </li>
            </ul>
          </nav>
        </div>

      </div>
    </div>
  </section>
      {/* End inner Page hero*/}
      {/* Start _2-col-left-sidebar*/}
      <section className="blog blog-home mega-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
              {selectedCategory && (
                <h2 className="selected-category-title">Category: {selectedCategory.name}</h2>
              )}
              <div className="posts-grid">
                <div className="row">
                  {filteredPosts.map((post) => (
                    <div className="col-12 col-lg-6 mb-4" key={post.id}>
                      <div className="post-box h-100 d-flex flex-column">
                        <div
                          className="post-link"
                          onClick={() => handleBlogClick(post.id)}
                          style={{ cursor: "pointer" }}
                        >
                          <div className="post-img-wrapper">
                            <img
                              className="parallax-img post-img"
                              loading="lazy"
                              src={post.image}
                              alt={post.title}
                              style={{ height: "200px", objectFit: "cover", width: "100%" }}
                            />
                            <span className="post-date">
                              <span className="day">{new Date(post.created_at).getDate()}</span>{" "}
                              {new Date(post.created_at).toLocaleString("default", { month: "short" })}{" "}
                              {new Date(post.created_at).getFullYear()}
                            </span>
                          </div>
                        </div>
                        <div className="post-summary flex-grow-1 d-flex flex-column">
                          <div className="post-info">
                            <span className="info post-cat">
                              <i className="bi bi-bookmark icon" />
                              {post.category_name}
                            </span>
                            <span className="info post-author">
                              <i className="bi bi-person icon" />
                              {post.author}
                            </span>
                          </div>
                          <div className="post-text flex-grow-1">
                            <h2 className="post-title">{post.title}</h2>
                            <p
                              className="post-excerpt"
                              style={{
                                overflow: "hidden",
                                whiteSpace: "nowrap",
                                textOverflow: "ellipsis",
                                display: "-webkit-box",
                                WebkitLineClamp: 1, // Limits to 3 lines
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                              }}
                            >
                              {post.content.length > 50 ? `${post.content.substring(0, 50)}...` : post.content}
                            </p>
                            <div
                              className="read-more mt-auto"
                              onClick={() => handleBlogClick(post.id)}
                              style={{ cursor: "pointer" }}
                            >
                              read more
                              <i className="bi bi-arrow-right icon" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="blog-sidebar">
                <div className="search sidebar-box">
                  <form className="search-form" onSubmit={handleSearchSubmit}>
                    <input
                      className="search-input"
                      type="search"
                      name="search"
                      placeholder="Search Posts..."
                      value={searchQuery}
                      onChange={handleSearchChange}
                    />
                    <button className="search-btn" type="submit">
                      <i className="bi bi-search icon" />
                    </button>
                  </form>
                </div>
                <div className="cats sidebar-box">
                  <h6 className="sidebar-box-title">Categories:</h6>
                  <ul className="sidebar-list cats-list">
                    {categories.map((category) => (
                      <li key={category.id} className="cat-item">
                        <a
                          className="cat-link"
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handleCategoryClick(category);
                          }}
                        >
                          {category.name}
                          <span className="cat-count">{category.count}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {/* <nav className="ma-pagination">
              <ul className="pagination justify-content-center">
                <li className="ma-page-item deactive-page-item">
                  <a className="ma-page-link" href="#" title="Previous Page">
                    <i className="bi bi-chevron-left icon" />
                  </a>
                </li>
                {pages.map((page) => (
                  <li className="ma-page-item" key={page}>
                    <a className="ma-page-link" href="#">
                      {page}
                    </a>
                  </li>
                ))}
                <li className="ma-page-item">
                  <a className="ma-page-link" href="#" title="Next Page">
                    <i className="bi bi-chevron-right icon" />
                  </a>
                </li>
              </ul>
            </nav> */}
          </div>
        </div>
      </section>
    </div>
  );
};

const totalPages = 6; // The total number of pages
const pages = [...Array(totalPages).keys()].map((i) => i + 1);