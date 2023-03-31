import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import "./SingleBlog.css";

const SingleBlog = ({ blog, handleAddToBookmark }) => {
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
          <p style={{ marginLeft: 300 }}>
            {time} minute read
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
      <h2> {title}</h2>
      <p className="hashtag">#beginner #programming</p>
      <p className="mark">Mark as read</p>
    </div>
  );
};
export default SingleBlog;
