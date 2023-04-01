import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
      <nav className="header col col-sm-1 ">
        <h2>Basic Knowledge</h2>
        <div>
          <a href="/home">Home</a>
          <a href="/blogs">Blogs</a>
          <a href="/login">Login</a>
          {/* <a src="user-1.png"></a> */}
          <img src="user-1.png" alt="" />
        </div>
      </nav>
    );
};

export default Blogs;
