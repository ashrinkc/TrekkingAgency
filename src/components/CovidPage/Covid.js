import React from "react";
import Mountain from "../../Img/multipleFlags.png";
import covi from "../../Img/Covid.png";
import "./covid.css";
import { useNavigate } from "react-router-dom";

const Covid = () => {
  const navigatee = useNavigate();
  const navigate = () => {
    navigatee("/faq");
  };
  return (
    <div>
      <img className="maincoviImg" src={Mountain} />
      <h1 className="covidHead">Covid-19</h1>
      <div className="covidContent">
        <h1>Covid-19 & Its Impacts</h1>
      </div>
      <div className="covidContainer">
        <div className="coviInfo">
          <img className="coviImg" src={covi} />
          <h2>Tourism in Nepal</h2>
          <p>
            Nepal is one of the best travel destinations for mountain lovers
            from all around the globe. With 08 Mountains above 8000 meters,
            Nepal is an absolute treasure for people searching for adventure
            into nature. From climbing the highest mountain of the world to
            going on hikes with your loved ones, Nepal offers a huge range of
            activities depending on your interests and physical capacity.
            Travelers are attracted by the unique geography of this nation and
            its landscapes.
          </p>
          <h2>Impact of Covid-19</h2>
          <p>
            Like every other nation in this world, Tourism of Nepal has been
            severely hampered by this global pandemic. Government has imposed a
            ban on International flights and sealed borders with both India and
            China to stop the inflow of tourists. Tourism being one of the major
            revenue generators in Nepal’s Economy, many people are facing
            financial problems due to ongoing pandemic.
          </p>
          <h2>Should I postpone my Nepal</h2>
          <p>
            trip to 2023? Postponing your trip to 2023 would be an ideal
            decision rather than to cancel it. As the world is slowly bouncing
            from the trauma of the pandemic, 2023 would be a suitable year to
            get back into nature and add some good memories. This will also have
            a positive impact on the country's Economy.
          </p>
        </div>
        <div>
          <button className="coviBtn" onClick={navigate}>
            Inquiry this trip
          </button>
          <h3>Top 10 Destinations for 2023</h3>
          <div style={{ color: "red" }}>
            <p> 1. Everest Base Camp</p>
            <p>2. Annapurna Base Camp</p> <p> 3. Ghorepani Poonhill</p>
            <p>4. Langtang Valley</p>
            <p> 5. Mardi Himal</p>
            <p> 6. Manaslu Circuit</p>
            <p> 7. Gosainkunda Trek</p>
            <p> 8. Gokyo Lake</p>
            <p>9. Three Passes trek</p>
            <p>10. Upper Mustang</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Covid;
