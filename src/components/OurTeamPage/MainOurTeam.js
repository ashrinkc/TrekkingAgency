import React from "react";
import Navbar from "../BlogPage/Navbar";
import Footer from "../Home/Footer";
import Team from "./Team";
import "./Team.css";
const MainOurTeam = () => {
  return (
    <div className="team">
      <Navbar />
      <Team />
      <Footer />
    </div>
  );
};

export default MainOurTeam;
