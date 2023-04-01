import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import "./SingleBlog.css";

const SingleBlog = ({ blog, handleAddToBookmark, handleAddToMarkAsRead }) => {
  const { id, cover_img, title, author_img, time, name, published } = blog;
  return (
    <div className="single-blog">
      <img src={cover_img} alt="" />
      <div className="blog-detail">
        <img src={author_img} alt="" />
        <div className="details">
          <div>
            <p className="name">{name}</p>
            <p className="date">{published}</p>
          </div>
          <p style={{ marginLeft: 270, marginRight: 5 }}>
            {time}{" "}
            <span style={{marginRight: 5 }}>minute read</span>
            <button
              onClick={() => {
                handleAddToBookmark(blog);
              }}
            >
              <FontAwesomeIcon icon={faBookmark} />
            </button>
          </p>
        </div>
      </div>
      <h3 className="title"> {title}</h3>
      <p className="hashtag">#beginner #programming</p>
      <button 
        onClick={() => {
          handleAddToMarkAsRead(blog);
        }}
        className="mark btn btn-primary"
      >
        Mark as read
      </button>
    </div>
  );
};
export default SingleBlog;

 