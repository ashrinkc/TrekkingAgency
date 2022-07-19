import React from "react";
import "./home.css";
import Everest from "../../Img/Everest.png";
import clock from "../../Img/clock.png";
import location from "../../Img/location.png";
const TrekkingPackages = (props) => {
  return (
    <>
      <div className="bestTrek">
        <img class="bestTrekImg" src={props.item.img} />
        <h2>{props.item.name}</h2>
        <h3 style={{ font: "block" }}>
          <a style={{ color: "red" }}>${props.item.price}</a>/Person
        </h3>
        <small>{props.item.info}</small>
        <div className="landmark">
          <img src={clock} />{" "}
          <span style={{ color: "red" }}> {props.item.time} days</span>
          <span className="midline"></span>
          <img src={location} />{" "}
          <span style={{ color: "red" }}> Landmarks</span>
        </div>
        <button className="homeBtn">More Details</button>
      </div>
    </>
  );
};

export default TrekkingPackages;
