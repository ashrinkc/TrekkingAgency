import React from "react";
import details from "../../Img/Details.png";
import "./Itenary.css";
import Trekking from "../../Img/Trekking.png";
import binoculars from "../../Img/binoculars.png";
const TrekDetails = () => {
  return (
    <div>
      <div className="TdetailsHead">
        <img src={details} />
        <h2>Trek Details</h2>
      </div>
      <div className="Tdetails">
        <p>
          Impressive sunrise views and Annapurna Himalaya range from Poon Hill
          3210m. In addition, Best panoramic views of Annapurna, Nilgirl,
          Dhaulagiri, Tukuche Peak, Machhapucchre, Hiunchuli and more. Great
          view of 7th world’s highest mountain Mt. Dhaulagiri. Natural hot
          spring bath at Jhinu Danda. Cultural traditional and typical living
          practises of Gurung people in Ghandruk Village. Locals experience
          lunch cooking with beneficiaries at Kot Danda. Moreover, Enjoying the
          Himalaya view, local village, crossing the suspension bridge and local
          wooden bridge and their lifestyle.
        </p>
        <img src={Trekking} />
      </div>
      <div className="Thighlights">
        <h2>Trek HighLights</h2>
        <div className="trekList">
          <ul>
            <li>
              Impressive sunrise views and Annapurna Himalaya range from Poon
              Hill 3210m.{" "}
            </li>
            <li>
              In addition, Best panoramic views of Annapurna, Nilgirl,
              Dhaulagiri, Tukuche Peak, Machhapucchre, Hiunchuli and more.
            </li>
            <li>Great view of 7th world’s highest mountain Mt. Dhaulagiri. </li>
            <li>Natural hot spring bath at Jhinu Danda.</li>
            <li>
              Cultural traditional and typical living practises of Gurung people
              in Ghandruk Village.{" "}
            </li>
            <li>
              Locals experience lunch cooking with beneficiaries at Kot Danda.{" "}
            </li>
            <li>
              Moreover, Enjoying the Himalaya view, local village, crossing the
              suspension bridge and local wooden bridge and their lifestyle.{" "}
            </li>
          </ul>
          <img src={binoculars} />
        </div>
      </div>
    </div>
  );
};

export default TrekDetails;
