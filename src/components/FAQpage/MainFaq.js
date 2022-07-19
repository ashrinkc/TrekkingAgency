import React from "react";
import Navbar from "../BlogPage/Navbar";
import Footer from "../Home/Footer";
import Faq from "./Faq";
import "./faq.css";
const MainFaq = () => {
  return (
    <div className="faqFull">
      <Navbar />
      <Faq />
      <Footer />
    </div>
  );
};

export default MainFaq;
