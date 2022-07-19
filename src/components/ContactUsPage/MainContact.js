import React from "react";
import Navbar from "../BlogPage/Navbar";
import Footer from "../Home/Footer";
import Contact from "./Contact";

const MainContact = () => {
  return (
    <div className="fullContact">
      <Navbar />
      <Contact />
      <Footer />
    </div>
  );
};

export default MainContact;
