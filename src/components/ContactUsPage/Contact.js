import React from "react";
import tourist from "../../Img/Tourist.png";
import "./contact.css";
import map from "../../Img/Map.png";
import { useNavigate } from "react-router-dom";
const Contact = () => {
  const navigatee = useNavigate();
  const navigate = () => {
    navigatee("/ourTeam");
  };
  return (
    <div className="mainContactContainer">
      <div className="contactUsHead">
        <img className="tourImg" src={tourist} />
        <h1>Contact Us</h1>
      </div>
      <div className="contactContainer">
        <div>
          <h1>NEED HELP?</h1>
          <p>Leave a message we will reply you promptly</p>
          <form>
            <div className="inputField">
              <div>
                <h5>First Name</h5>
                <input />
                <h5>E-Mail</h5>
                <input />
              </div>
              <div>
                <h5>Last Name</h5>
                <input />
                <h5>Phone</h5>
                <input />
              </div>
            </div>
            <h5>Address</h5>
            <input className="msgInput" />
            <h5>Message</h5>
            <textarea rows="10" cols="76" />
            <div className="contactBtnContainer">
              <button className="contactSubmitbtn" onClick={navigate}>
                Submit
              </button>
            </div>
          </form>
        </div>
        <div>
          <h1>Our Location</h1>
          <img src={map} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
