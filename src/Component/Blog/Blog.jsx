import React from "react";
import { useEffect, useState } from "react";
import './Blog.css'
import SingleBlog from "../SingleBlog/SingleBlog";

const Blog = () => {
  const [blog, setBlog] = useState([]);
  
useEffect(() => {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => setBlog(data));
}, []);  
  
  return (
    <div className="container">
      <div className="blog-container">
        {blog.map((blog) => (
          <SingleBlog 
          key={blog.id}
          blog = {blog}
          ></SingleBlog>
        ))}
      </div>
      <div>
        <h1>Cart</h1>
      </div>
    </div>
  );
};

export default Blog;
