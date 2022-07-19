import React, { useRef } from "react";
import ExploreTrekCom from "./ExploreTrekCom";
import "./home.css";
import Data from "./Data.js";
import next from "../../Img/next.png";
import nexttwo from "../../Img/nexttwo.png";
import BestSelling from "./BestSelling";
const Explore = () => {
  const trekCards = Data.map((item) => {
    return <ExploreTrekCom item={item} />;
  });

  const ref = useRef(null);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };
  return (
    <>
      <div className="explore">
        <h3 style={{ fontFamily: "Montserrat" }}>
          Explore Trekking Regions in Nepal
        </h3>
        <hr className="exphr" />
      </div>
      <div className="trekCards" ref={ref}>
        {trekCards}
      </div>
      <div className="trekScroll">
        <div className="intrek">
          <img src={next} onClick={() => scroll(-40)} />
          <span>Back</span>
        </div>
        <div className="intrek">
          <span>Next</span>
          <img src={nexttwo} onClick={() => scroll(40)} />
        </div>
      </div>

      {/* <BestSelling /> */}
    </>
  );
};

export default Explore;
