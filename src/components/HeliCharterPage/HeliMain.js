import React from "react";
import Navbar from "../BlogPage/Navbar";
import Footer from "../Home/Footer";
import "./Heli.css";
import HeliCharter from "./HeliCharter";
const HeliMain = () => {
  return (
    <div className="heliMain">
      <Navbar />
      <HeliCharter />
      <Footer />
    </div>
  );
};

export default HeliMain;
