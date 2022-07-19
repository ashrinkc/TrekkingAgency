import React from "react";
import Mountain from "../../Img/Mountain.png";
import TrekkingPackages from "../Home/TrekkingPackages";
import data from "./HeliGalleryData";
import "./heliGallery.css";
const HeliCharterGallery = () => {
  const info = data.map((items) => {
    return <TrekkingPackages item={items} />;
  });
  return (
    <div>
      <img className="mainimg" src={Mountain} />
      <h1 className="charterTrips">Heli Charter Trips</h1>
      <div className="wholeGalleryHeli">
        <div className="heliGalleryInfo">{info}</div>
        <div className="heliGallerybtn">
          <button>View More</button>
        </div>
      </div>
    </div>
  );
};

export default HeliCharterGallery;
