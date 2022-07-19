import React from "react";
import TrekkingPackages from "./TrekkingPackages";
import data from "./TrekPackageData.js";
import "./home.css";
const TrekkingPackageComponents = () => {
  const info = data.map((items) => {
    return <TrekkingPackages item={items} />;
  });
  return (
    <div className="packages">
      <div className="explore">
        <h3 style={{ fontFamily: "Montserrat" }}>Trekking Packages</h3>
      </div>
      <hr className="exphr" />
      <div className="trekPackComponents">{info}</div>
      <button className="homeViewBtn">View More</button>
    </div>
  );
};

export default TrekkingPackageComponents;
