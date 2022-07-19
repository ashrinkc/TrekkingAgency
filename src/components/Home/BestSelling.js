import React from "react";
import Everest from "../../Img/Everest.png";
import "./home.css";
import clock from "../../Img/clock.png";
import location from "../../Img/location.png";
import next from "../../Img/next.png";
import nexttwo from "../../Img/nexttwo.png";
const BestSelling = () => {
  return (
    <>
      <div className="explore">
        <h3 style={{ fontFamily: "Montserrat" }}>
          <a style={{ color: "red" }}>Best</a> Selling Packages
        </h3>
      </div>
      <hr className="exphr" />
      <div className="mainBestSell">
        <div className="bestSell">
          <img class="bestSellImg" src={Everest} />
          <h4>Everest Circuit Trek</h4>
          <p>
            Trek to the top of the world. Everest Base Camp Trek is the
            adventure of a lifetime destination for many trekkers.
          </p>
          <div className="landmarks">
            <img src={clock} /> <span style={{ color: "red" }}> 15 days</span>
            <span className="midline"></span>
            <img src={location} />{" "}
            <span style={{ color: "red" }}> Landmarks</span>
          </div>
          <button className="homeBtn">More Details</button>
        </div>

        <div className="bestSell">
          <img class="bestSellImg" src={Everest} />
          <h4>Everest Circuit Trek</h4>
          <p>
            Trek to the top of the world. Everest Base Camp Trek is the
            adventure of a lifetime destination for many trekkers.
          </p>
          <div className="landmarks">
            <img src={clock} /> <span style={{ color: "red" }}> 15 days</span>
            <span className="midline"></span>
            <img src={location} />{" "}
            <span style={{ color: "red" }}> Landmarks</span>
          </div>
          <button className="homeBtn">More Details</button>
        </div>

        <div className="bestSell">
          <img class="bestSellImg" src={Everest} />
          <h4>Everest Circuit Trek</h4>
          <p>
            Trek to the top of the world. Everest Base Camp Trek is the
            adventure of a lifetime destination for many trekkers.
          </p>
          <div className="landmarks">
            <img src={clock} /> <span style={{ color: "red" }}> 15 days</span>
            <span className="midline"></span>
            <img src={location} />{" "}
            <span style={{ color: "red" }}> Landmarks</span>
          </div>
          <button className="homeBtn">More Details</button>
        </div>
      </div>
      <div className="trekScroll">
        <div className="intrek">
          <img src={next} />
          <span>Back</span>
        </div>
        <div className="intrek">
          <span>Next</span>
          <img src={nexttwo} />
        </div>
      </div>
    </>
  );
};

export default BestSelling;
