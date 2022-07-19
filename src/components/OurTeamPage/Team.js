import React from "react";
import "./Team.css";
import Annapurna from "../../Img/LangTang.png";
import Mountain from "../../Img/Mountain.png";
const Team = () => {
  return (
    <div>
      <img className="TeamHeadImg" src={Mountain} />
      <div className="teamContainer">
        <h1>Our Team</h1>
        <div className="teamInfo">
          <div className="teamMember">
            <img className="teamImg" src={Annapurna} />
            <h1>CEO</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidata
            </p>
          </div>
          <div className="teamMember">
            <img className="teamImg" src={Annapurna} />
            <h1>HR</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidata
            </p>
          </div>
        </div>
        <div className="teamInfo">
          <div className="teamMember">
            <img className="teamImg" src={Annapurna} />
            <h1>TREK GUIDE #1</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidata
            </p>
          </div>
          <div className="teamMember">
            <img className="teamImg" src={Annapurna} />
            <h1>TREK GUIDE #2</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidata
            </p>
          </div>
        </div>
        <button className="teambtn">View More</button>
      </div>
    </div>
  );
};

export default Team;
