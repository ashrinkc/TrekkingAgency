import React from "react";
import trektwo from "../../Img/trektwo.png";
import fstars from "../../Img/fstars.png";
import next from "../../Img/next.png";
import nexttwo from "../../Img/nexttwo.png";
const ClientContainer = () => {
  return (
    <div className="explore">
      <h1>What Clients Say</h1>
      <hr className="exphr" />
      <div className="clientReview">
        <img src={next} />
        <div className="itecontainer">
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
        </div>

        <div className="itecontainer">
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
        </div>

        <div className="itecontainer">
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
        </div>
        <img src={nexttwo} />
      </div>
    </div>
  );
};

export default ClientContainer;
