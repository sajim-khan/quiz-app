import React from "react";
import { useEffect, useState } from "react";
import "./Blog.css";
import SingleBlog from "../SingleBlog/SingleBlog";
import SideCart from "../SideCart/SideCart";
import { ToastContainer, toast } from "react-toastify";

const Blog = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setBlog(data));
  }, []);

  const [bookmark, setBookmark] = useState([]);
  const handleAddToBookmark = (title) => {
  if(bookmark.find(p => p.id === title.id)){
    toast("Already added in Bookmark");
  }
  
  
    const newBookmark = [...bookmark, title];
    setBookmark(newBookmark);
  };

const [spentTimeBlog, setSpentTimeBlog] = useState([]);
const handleAddToMarkAsRead = (time) => {
  const newTime = [...spentTimeBlog, time];
  setSpentTimeBlog(newTime);
  console.log(spentTimeBlog);
}

let totalTime = 0;
for (const singleTimeBlog of spentTimeBlog){
   totalTime = totalTime + singleTimeBlog.time
}
  return (
    <div className="container">
      <div className="blog-container">
        {blog.map((blog) => (
          <SingleBlog
            key={blog.id}
            blog={blog}
            handleAddToBookmark={handleAddToBookmark}
            handleAddToMarkAsRead={handleAddToMarkAsRead}
          ></SingleBlog>
        ))}
      </div>
      <div>
        <h3 className="spent-time">Spent time on read : {totalTime} min</h3>
        <h3 className="bookmark">Bookmarked Blogs : {bookmark.length} </h3>

        {bookmark.map((title) => (
          <SideCart title={title}></SideCart>
        ))}
      </div>
    </div>
  );
};
export default Blog;

