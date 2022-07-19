import React from "react";
import Navbar from "../BlogPage/Navbar";
import Footer from "../Home/Footer";
import Covid from "./Covid";

const MainCovid = () => {
  return (
    <div className="mainCovid">
      <Navbar />
      <Covid />
      <Footer />
    </div>
  );
};

export default MainCovid;
