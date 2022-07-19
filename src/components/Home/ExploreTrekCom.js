import React from "react";
import "./home.css";

const ExploreTrekCom = (props) => {
  return (
    <>
      <div className="mainScroll">
        <img className="scrollImg" src={props.item.Img} />
        <p className="mainScrollUp"> {props.item.name} </p>
        <div className="mainScrollDown">
          <p>
            The Langtang Valley has long been a favorite trek due to its
            expansive views, interesting Tamang culture and relatively gentle
            pace.
          </p>
          <p style={{ color: "red", paddingLeft: "12vh" }}>View More</p>
        </div>
      </div>
    </>
  );
};

export default ExploreTrekCom;
