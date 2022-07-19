import React, { useState } from "react";
import "./Itenary.css";
import next from "../../Img/arrowDown.png";
import up from "../../Img/arrowUp.png";
import trektwo from "../../Img/trektwo.png";
import fstars from "../../Img/fstars.png";
import { useNavigate } from "react-router-dom";
const Itenarys = () => {
  const [click, UpdateClick] = useState(null);
  const [clicktwo, UpdateClicktwo] = useState(null);
  const [clickthree, UpdateClickthree] = useState(null);
  const [clickfour, UpdateClickfour] = useState(null);
  const [clickfive, UpdateClickfive] = useState(null);
  const [clicksix, UpdateClicksix] = useState(null);
  const [clickseven, UpdateClickseven] = useState(null);
  const [mainClick, UpdatemainClick] = useState(null);
  const showInfo = () => {
    if (click) {
      UpdateClick(null);
    } else {
      UpdateClick(1);
    }
  };
  const showInfotwo = () => {
    if (clicktwo) {
      UpdateClicktwo(null);
    } else {
      UpdateClicktwo(1);
    }
  };
  const showInfothree = () => {
    if (clickthree) {
      UpdateClickthree(null);
    } else {
      UpdateClickthree(1);
    }
  };
  const showInfofour = () => {
    if (clickfour) {
      UpdateClickfour(null);
    } else {
      UpdateClickfour(1);
    }
  };
  const showInfofive = () => {
    if (clickfive) {
      UpdateClickfive(null);
    } else {
      UpdateClickfive(1);
    }
  };
  const showInfosix = () => {
    if (clicksix) {
      UpdateClicksix(null);
    } else {
      UpdateClicksix(1);
    }
  };
  const showInfoseven = () => {
    if (clickseven) {
      UpdateClickseven(null);
    } else {
      UpdateClickseven(1);
    }
  };
  const showAll = () => {
    if (mainClick) {
      UpdatemainClick(null);
    } else {
      UpdatemainClick(1);
    }
  };
  const navigatee = useNavigate();
  const navigate = () => {
    navigatee("/payment");
  };
  return (
    <>
      <div className="itenarys">
        <div>
          <div className="showAll">
            <h1>Trek Itenary</h1>
            <small onClick={showAll}>Show All</small>
          </div>
          <div className="redbtn">
            <div style={{ width: "500px" }}>
              <button onClick={showInfo} className="itebtn">
                <span>Day1</span> Arrive At Kathmandu Airport,Transfer to hotel{" "}
                <img src={click ? up : next} />
              </button>
              {click && (
                <small>
                  Upon arrival at Kathmandu airport, our representative will
                  welcome you holding a clear sign displaying your name. You’ll
                  then be taken to your chosen hotel in the center of the city.
                  That evening we will provide a welcome dinner in a typical
                  Nepali restaurant where you can taste authentic Nepali food
                  and experience a cultural dance presentation.
                </small>
              )}
            </div>
            <div style={{ width: "500px" }}>
              <button onClick={showInfotwo} className="itebtn">
                <span>Day2</span> Arrive At Kathmandu Airport,Transfer to hotel{" "}
                <img src={clicktwo ? up : next} />
              </button>
              {clicktwo && (
                <small>
                  Upon arrival at Kathmandu airport, our representative will
                  welcome you holding a clear sign displaying your name. You’ll
                  then be taken to your chosen hotel in the center of the city.
                  That evening we will provide a welcome dinner in a typical
                  Nepali restaurant where you can taste authentic Nepali food
                  and experience a cultural dance presentation.
                </small>
              )}
            </div>
            <div style={{ width: "500px" }}>
              <button onClick={showInfothree} className="itebtn">
                <span>Day3</span> Arrive At Kathmandu Airport,Transfer to hotel{" "}
                <img src={clickthree ? up : next} />
              </button>
              {clickthree && (
                <small>
                  Upon arrival at Kathmandu airport, our representative will
                  welcome you holding a clear sign displaying your name. You’ll
                  then be taken to your chosen hotel in the center of the city.
                  That evening we will provide a welcome dinner in a typical
                  Nepali restaurant where you can taste authentic Nepali food
                  and experience a cultural dance presentation.
                </small>
              )}
            </div>
            <div style={{ width: "500px" }}>
              <button onClick={showInfofour} className="itebtn">
                <span>Day4</span> Arrive At Kathmandu Airport,Transfer to hotel{" "}
                <img src={clickfour ? up : next} />
              </button>
              {clickfour && (
                <small>
                  Upon arrival at Kathmandu airport, our representative will
                  welcome you holding a clear sign displaying your name. You’ll
                  then be taken to your chosen hotel in the center of the city.
                  That evening we will provide a welcome dinner in a typical
                  Nepali restaurant where you can taste authentic Nepali food
                  and experience a cultural dance presentation.
                </small>
              )}
            </div>
            <div style={{ width: "500px" }}>
              <button onClick={showInfofive} className="itebtn">
                <span>Day5</span> Arrive At Kathmandu Airport,Transfer to hotel{" "}
                <img src={clickfive ? up : next} />
              </button>
              {clickfive && (
                <small>
                  Upon arrival at Kathmandu airport, our representative will
                  welcome you holding a clear sign displaying your name. You’ll
                  then be taken to your chosen hotel in the center of the city.
                  That evening we will provide a welcome dinner in a typical
                  Nepali restaurant where you can taste authentic Nepali food
                  and experience a cultural dance presentation.
                </small>
              )}
            </div>
            <div style={{ width: "500px" }}>
              <button onClick={showInfosix} className="itebtn">
                <span>Day6</span> Arrive At Kathmandu Airport,Transfer to hotel{" "}
                <img src={clicksix ? up : next} />
              </button>
              {clicksix && (
                <small>
                  Upon arrival at Kathmandu airport, our representative will
                  welcome you holding a clear sign displaying your name. You’ll
                  then be taken to your chosen hotel in the center of the city.
                  That evening we will provide a welcome dinner in a typical
                  Nepali restaurant where you can taste authentic Nepali food
                  and experience a cultural dance presentation.
                </small>
              )}
            </div>
            <div style={{ width: "500px" }}>
              <button onClick={showInfoseven} className="itebtn">
                <span>Day7</span> Arrive At Kathmandu Airport,Transfer to hotel{" "}
                <img src={clickseven ? up : next} />
              </button>
              {clickseven && (
                <small>
                  Upon arrival at Kathmandu airport, our representative will
                  welcome you holding a clear sign displaying your name. You’ll
                  then be taken to your chosen hotel in the center of the city.
                  That evening we will provide a welcome dinner in a typical
                  Nepali restaurant where you can taste authentic Nepali food
                  and experience a cultural dance presentation.
                </small>
              )}
            </div>
          </div>
        </div>
        {/* <div className="itecontainer">
      <h1>User Review</h1>
      <hr />
      <img className="trekcir" src={trektwo} />
      <div className="iteconinside">
        <h4>Shilua Shakya</h4>
        <small style={{ color: "gray" }}>Kathmandu,Nepal</small>
        <img src={fstars} />

        <p>
          Best experience ever! The views, challenging trekking, friendly
          group made for an unforgettable 2 weeks!{" "}
        </p>
      </div>
      <button className="itetrip">Inquiry this trip</button>
    </div> */}
      </div>
      <button className="itetrip" onClick={navigate}>
        Inquiry this trip
      </button>
    </>
  );
};

export default Itenarys;
