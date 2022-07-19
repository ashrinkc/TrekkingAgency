import React from "react";
import Footer from "../Home/Footer";
import Blog from "./Blog";
import Body from "./Body";
import Navbar from "./Navbar";
import "./new.css";
const MainBlog = () => {
  return (
    <>
      <div className="mainBlog">
        <Navbar />
        <Body />
        <Blog />
        <Footer />
      </div>
    </>
  );
};

export default MainBlog;
