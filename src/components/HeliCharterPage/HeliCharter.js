import React from "react";
import Mountain from "../../Img/Mountain.png";
import details from "../../Img/Details.png";
import blueHeli from "../../Img/blueHeli.png";
import yellowHeli from "../../Img/yellowHeli.png";
import trektwo from "../../Img/trektwo.png";
import fstars from "../../Img/fstars.png";
import costHeli from "../../Img/CostHeli.png";
import "./Heli.css";
import TrekkingPackages from "../Home/TrekkingPackages";
import data from "./HeliData";
import heligridone from "../../Img/heligrid1.png";
import heligridthree from "../../Img/heligrid3.png";
import heligridfour from "../../Img/heligrid4.png";
import heligridfive from "../../Img/heligrid5.png";
import heligridtwo from "../../Img/heligrid2.png";
import { useNavigate } from "react-router-dom";
const HeliCharter = () => {
  let navigatee = useNavigate();
  const info = data.map((items) => {
    return <TrekkingPackages item={items} />;
  });
  const navigate = () => {
    navigatee("/heliCharterGallery");
  };
  return (
    <div className="heliBody">
      <img className="heliimg" src={Mountain} />
      <h1>Heli Charter</h1>
      <div className="heliDetails">
        <img src={details} />
        <h1> Heli Tour Details</h1>
      </div>
      {/* <div className="allComponents"> */}
      <div className="HeliInfo">
        <p>
          Enjoy this opportunity to witness aerial view of the beauty. Of the
          majestic Annapurna Himalayas from a private helicopter. Taking to the
          skies seeing the majestic Himalayan panorama. Of Annapurna Range
          slowly unfolds in front of our eyes. AnnapurnaI (8,091m), Annapurna II
          (7,937m), Annapurna III (7,555m). Machhapuchhre (6,997m), and
          Annapurna South (7,219m) are some of the most notable Himalayas. On
          the flight, you also get amazing view of Pokhara city, lakes, green
          hills, and dense rhododendron forest. You begin your journey either
          from Kathmandu or Pokhara. The helicopter takes off from the domestic
          airport of Pokhara. If you are already in Pokhara then, you will make
          your way to the airport early in the morning. If you are in Kathmandu
          then. You will first fly to Pokhara airport. After a short break, you
          will take off in the helicopter heading towards the Himalayas.
        </p>
        <img src={blueHeli} />
      </div>
      <div className="heliTourDetails">
        <div className="heliList">
          <h1>Heli Tour HighLights</h1>
          <ul>
            <li>
              Fly above the snowy summits of the Annapurna Himalayan Range{" "}
            </li>
            <li>
              Journey high above the valleys taking in the very best of what the
              valley has to offer
            </li>{" "}
            <li>
              Touch down at 4130 meters in the base camp for stunning view of
              Annapurna Range
            </li>
            <li>
              {" "}
              Observe the gleaming lakes of Pokhara and other attractions around
              the Valley
            </li>
          </ul>
        </div>
        <div>
          <img src={yellowHeli} />
        </div>
      </div>
      <div className="heliTrekItenary">
        <div className="heliTrekIteInfo">
          <h1>Trek Itenary</h1>
          <p>
            If you are beginning from Kathmandu, wemake way to the city of
            Pokhara via a short flight from Kathmandu international airport. The
            helicopter takes off from the domestic airport of Pokhara. Enjoying
            the stunning beauty of the city and lakes from above, we fly towards
            Annapurna Base Camp. Located at 4,130meters, the base camp is
            stunning with Himalayas covering the entire horizon. We have lunch
            in the base camp looking at Machhapuchhre (6,337m), Annapurna
            South(7,219m), Annapurna I(8,091m), Annapurna II(7,937m), and
            Hiunchuli(6,441m).After30 to 45 minutes in the camp,we head back
            toKathmandu or Pokhara depending on where you initially took off.You
            will be dropped back at your hotel. Annapurna South(7,219m),
            Annapurna I(8,091m), Annapurna II(7,937m), and
            Hiunchuli(6,441m).After30 to 45 minutes in the camp,we head back
            toKathmandu or Pokhara depending on where you initially took off.You
            will be dropped back at your hotel.After30 to 45 minutes in the
            camp,we head back toKathmandu or Pokhara depending on where you
            initially took off.You will be dropped back at your hotel.
          </p>
        </div>
        <div className="mainheliContainer">
          <h1>User Review</h1>
          <div className="heliCirContainer">
            <div className="heliCirImgContainer">
              <img className="heliCirImg" src={trektwo} />
            </div>
            <div className="heliCirInfo">
              <h5>Umang Shakya</h5>
              <small>Kathmandu, Nepal</small>
              <img src={fstars} />
              <p>
                Thrilling ride! The views and the scenery, friendly group made
                for an unforgettable flight trip!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="heliCost">
        <div className="heliCostInfo">
          <h1>Costs</h1>
          <p>
            Depending on the location of pick up and drop off point,the flight
            time, date and cost changes. During the on-season, flights take off
            daily from either location. But, we can also tailor a unique
            experience just for you. Regardless of the package you choose, we
            assure you best value of the time and money you decide to invest in
            this trip.
          </p>
        </div>
        <div>
          <img style={{ paddingTop: "2vh" }} src={costHeli} />
        </div>
      </div>
      <div className="heliGalerryGridContainer">
        <h1>Heli Tour Gallery</h1>
        <div className="heliGalleryGrid">
          <div className="heligall1">
            <img src={heligridone} />
          </div>
          <div className="heligall2">
            <img src={heligridtwo} />
          </div>
          <div className="heligall3">
            <img src={heligridthree} />
          </div>
          <div className="heligall4">
            <img src={heligridfour} />
          </div>
          <div className="heligall5">
            <img src={heligridfive} />
          </div>
        </div>
      </div>
      <div className="heliBtnContainer">
        <button className="heliInqBtn" onClick={navigate}>
          Inquiry this trip
        </button>
      </div>
      <div className="heliCardContainer">
        <h1>Related Heli Tours</h1>
        <div className="heliCard">{info}</div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default HeliCharter;
