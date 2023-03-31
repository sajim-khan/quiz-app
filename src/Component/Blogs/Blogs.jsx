import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
      <nav className="header">
        <h2>Basic Knowledge</h2>
        <div>
          <a href="/home">Home</a>
          <a href="/blogs">Blogs</a>
          <a href="/login">Login</a>
          <img src="user-1.png" alt="" />
        </div>
      </nav>
      
    );
};

export default Blogs;