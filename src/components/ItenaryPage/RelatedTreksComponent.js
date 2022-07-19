import React from "react";
import iteann from "../../Img/iteann.png";
import clock from "../../Img/clock.png";
import "./Itenary.css";
import location from "../../Img/location.png";
const RelatedTreksComponent = () => {
  return (
    <div className="maintrekComponents">
      <div className="trekComponents">
        <img
          className="contImg"
          style={{
            width: "344px",
            height: "214px",
          }}
          src={iteann}
        />
        <h2>Everest Three Pass Trek</h2>
        <div className="itePrice">
          <h2>
            <span style={{ color: "red" }}>$120</span>/Person
          </h2>
          <p>Trek to the top of the world</p>
        </div>
        <div className="landmarks">
          <img src={clock} /> <span> 5 days</span>
          <span className="midline"></span>
          <img src={location} /> <span> Landmarks</span>
        </div>
        <button className="moredetails">More Details</button>
      </div>
      <div className="trekComponents">
        <img
          className="contImg"
          style={{
            width: "344px",
            height: "214px",
          }}
          src={iteann}
        />
        <h2>Everest Three Pass Trek</h2>
        <div className="itePrice">
          <h2>
            <span style={{ color: "red" }}>$120</span>/Person
          </h2>
          <p>Trek to the top of the world</p>
        </div>
        <div className="landmarks">
          <img src={clock} /> <span> 5 days</span>
          <span className="midline"></span>
          <img src={location} /> <span> Landmarks</span>
        </div>
        <button className="moredetails">More Details</button>
      </div>
      <div className="trekComponents">
        <img
          className="contImg"
          style={{
            width: "344px",
            height: "214px",
          }}
          src={iteann}
        />
        <h2>Everest Three Pass Trek</h2>
        <div className="itePrice">
          <h2>
            <span style={{ color: "red" }}>$120</span>/Person
          </h2>
          <p>Trek to the top of the world</p>
        </div>
        <div className="landmarks">
          <img src={clock} /> <span> 5 days</span>
          <span className="midline"></span>
          <img src={location} /> <span> Landmarks</span>
        </div>
        <button className="moredetails">More Details</button>
      </div>
    </div>
  );
};

export default RelatedTreksComponent;
