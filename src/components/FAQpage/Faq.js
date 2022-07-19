import React from "react";
import Mountain from "../../Img/iteann.png";
import "./faq.css";
const Faq = () => {
  return (
    <div>
      <img className="faqimg" src={Mountain} />
      <h1 className="faqTitle">FAQ</h1>
      <div className="faqHead">
        <h2>FAQ</h2>
      </div>
      <div className="faqContainer">
        <div className="faqInfo">
          <div>
            <div className="faqInfoHead">
              <h3>1. </h3>
              <h3>What do I need to carry?</h3>
            </div>
            <p>
              Unlike backpacking, when on a trek you will only be required to
              carry those items needed for the day of walking. All of the group
              personal gear and camping equipment is carried by a trained group
              of porters or pack animals (ponies, yaks, llama, camels…)
            </p>
          </div>
          <div>
            <div className="faqInfoHead">
              <h3>2. </h3>
              <h3>Who accompanies us during the trip?</h3>
            </div>
            <p>
              Depending on the trip, you will be accompanied by an experienced
              Western trekking guide and / or an English-speaking professional
              local guide. In addition, each group will have a local kitchen
              staff and support crew.
            </p>
          </div>
          <div>
            <div className="faqInfoHead">
              <h3>3. </h3>
              <h3>Is it safe to trek right now?</h3>
            </div>
            <p>
              To help protect our travellers and the places we visit, all our
              tours now adhere to our Travel with Confidence policy, which
              includes vaccination requirements. On all tours all travellers
              must have received a full COVID-19 vaccination with the final dose
              given at least 14 days before the start of the tour.
            </p>
          </div>
        </div>
        <div>
          <button className="faqBtn">Inquiry this trip</button>
        </div>
      </div>
    </div>
  );
};

export default Faq;
