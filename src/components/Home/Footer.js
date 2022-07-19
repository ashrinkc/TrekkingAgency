import React from "react";
import "./home.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footercom">
        <div>
          <h3>Contact Info</h3>
          <hr style={{ background: "red" }}></hr>
          <h5>Phone no.</h5>
          <h5>Email</h5>
          <h5>Location</h5>
          <h5>Social Media</h5>
        </div>
        <div>
          <h3>Activities</h3>
          <h5>Trekking</h5>
          <h5>Tour Nepal</h5>
          <h5>Peak Climbing</h5>
        </div>
        <div>
          <h3>Destinations</h3>
          <h5>Annapurna Conservation Area</h5>
          <h5>Ghorepani Poonhill</h5>
          <h5>LangTang National Park</h5>
        </div>
      </div>
      <small>
        Copyright @ 2022 Perfect Trek (P.) Ltd. All Rights Reserved.
      </small>
    </div>
  );
};

export default Footer;
