import React from "react";
import { useEffect, useState } from "react";
import "./Blog.css";
import SingleBlog from "../SingleBlog/SingleBlog";
import SideCart from "../SideCart/SideCart";

const Blog = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setBlog(data));
  }, []);
  const [bookmark, setBookmark] = useState([]);
  const handleAddToBookmark = (title) => {
    const newBookmark = [...bookmark, title];
    setBookmark(newBookmark);
  };

  return (
    <div className="container">
      <div className="blog-container">
        {blog.map((blog) => (
          <SingleBlog
            key={blog.id}
            blog={blog}
            handleAddToBookmark={handleAddToBookmark}
          ></SingleBlog>
        ))}
      </div>
      <div>
        <h1>Cart</h1>

        {bookmark.map((title) => (
          <SideCart title={title}></SideCart>
        ))}
      </div>
    </div>
  );
};

export default Blog;
