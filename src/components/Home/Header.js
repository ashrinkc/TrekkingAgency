import React, { useRef } from "react";
import globe from "../../Img/globe.png";
import banner from "../../Img/banner.png";
import "./home.css";
const Header = () => {
  return (
    <div className="globe">
      <img src={globe} />
      <div className="Hometitle">
        <h1>Plan the perfect Trek</h1>

        <p>Find the perfect trip for you in Nepal</p>
      </div>
      <div className="dateTime">
        <div className="dateTimeInfo">
          <div>
            <select className="options">
              <option value="volvo">Location</option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          {/* <div>
            <h5>Date and Time</h5>
          </div> */}
          <div>
            <input
              placeholder="Date and Time"
              className="options"
              type="date"
            />
          </div>
          <div>
            <select className="options">
              <option value="volvo">People</option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
            </select>
          </div>
        </div>
        <button className="srchbtn">Search</button>
      </div>
      <div className="banner">
        <img src={banner} />
        <h1>30% OFF</h1>
      </div>
    </div>
  );
};

export default Header;
