import React from "react";
import './SideCart.css'

const SideCart = ({ title }) => {
  return <div className="site-cart">
  {title.title}
  </div>;
};

export default SideCart;
