import React from "react";
import Navbar from "../BlogPage/Navbar";
import Itenarys from "./Itenarys";
import RelatedTreks from "./RelatedTreks";
import TopItenary from "./TopItenary";
import TrekDetails from "./TrekDetails";
import TrekGallery from "./TrekGallery";
import "./Itenary.css";
import Footer from "../Home/Footer";
const MainItenary = () => {
  return (
    <>
      <div className="itPage">
        <Navbar />
        <TopItenary />
        <TrekDetails />
        <TrekGallery />
        <Itenarys />
        <RelatedTreks />
        <Footer />
      </div>
    </>
  );
};

export default MainItenary;
