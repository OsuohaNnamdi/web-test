import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Api } from "../admin/auth/Api";

export const SingleBlog = () => {
  const { blogId } = useParams(); // Extract blogId from the URL
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await Api.get(`/api/posts/detail/${blogId}/`);
        setBlogData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [blogId]); // Re-fetch when blogId changes

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!blogData) {
    return <div>No data found</div>;
  }

  return (
    <div className="blog blog-post">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-10 mx-auto">
            {/* Blog Title */}
            <h2 className="text-center mb-4">{blogData.title}</h2>

            {/* Blog Image */}
            <div className="text-center mb-4">
              <img
                src={blogData.image}
                alt="Featured Image"
                className="img-fluid rounded"
                style={{ maxHeight: "400px", width: "100%" }}
              />
            </div>
            <div className="post-main-area">
              <div className="post-info">
                <span className="info post-author">
                  <i className="fas fa-user icon" /> {blogData.author}
                </span>
                <span className="info post-date">
                  <i className="fas fa-history icon" />{" "}
                  {new Date(blogData.created_at).toLocaleDateString()}
                </span>
                <span className="info post-cat">
                  <i className="fas fa-list-alt icon" /> {blogData.category_name}
                </span>
              </div>
            </div>

            {/* Markdown Section */}
            <div className="mt-3">
              <div className="position-relative">
                <ReactMarkdown
                  components={{
                    code({ node, inline, className, children, ...props }) {
                      const match = /language-(\w+)/.exec(className || "");
                      return !inline ? (
                        <SyntaxHighlighter
                          style={darcula}
                          language={match ? match[1] : "python"}
                          PreTag="div"
                          {...props}
                        >
                          {String(children).replace(/\n$/, "")}
                        </SyntaxHighlighter>
                      ) : (
                        <code className={className} {...props}>
                          {children}
                        </code>
                      );
                    },
                  }}
                >
                  {blogData.content}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};