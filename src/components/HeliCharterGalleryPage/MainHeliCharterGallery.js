import React from "react";
import Navbar from "../BlogPage/Navbar";
import Footer from "../Home/Footer";
import HeliCharterGallery from "./HeliCharterGallery";

const MainHeliCharterGallery = () => {
  return (
    <div className="mainHeliCharterGallery">
      <Navbar />
      <HeliCharterGallery />
      <Footer />
    </div>
  );
};

export default MainHeliCharterGallery;
