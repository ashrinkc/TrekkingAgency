import React from "react";
import BlogComponent from "./BlogComponent";
import "./new.css";
const Blog = () => {
  return (
    <div className="mainblog">
      <div className="bloghead">
        <h1>Blog section</h1>
      </div>
      <BlogComponent />
    </div>
  );
};

export default Blog;
