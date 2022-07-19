import React from "react";
import Navbar from "../BlogPage/Navbar";
import man from "../../Img/mountainMan.png";
import mountain from "../../Img/Annapurnatwo.png";
import "./indiBlog.css";
import Footer from "../Home/Footer";
const FirstBlog = () => {
  return (
    <div className="mainFirstBlog">
      <Navbar />
      <div>
        <img className="indiBlogImg" src={man} />
        <h1 className="indiBlogTitle">Blog</h1>
        <div className="blogHead">
          <h2>Blog</h2>
        </div>
        <div className="indiBlogContainer">
          <div className="indiBlogInfo">
            <img className="inditopImg" src={mountain} />
            <p>
              <span style={{ fontSize: "40px" }}>A</span>s the usual upcoming
              season, Lukla Flights Diverted to Ramechhap. the Lukla flight will
              be flying from Ramechhap, according to a notice issued by the
              Nepal Aviation Authority, which can often be delayed on the runway
              due to air traffic in the Kathmandu terminal.
            </p>
            <p>
              all trekking operations to and from Lukla flights from Kathmandu
              will be diverted to Manthali airport in the Ramechhap district. So
              currently, trekkers will have to take the flight to and from the
              local airport at Ramechhap instead of Kathmandu.
            </p>
            <p>
              Ramechhap is a modest little town with a small airstrip about 140
              km (85 miles) from Kathmandu with very little to no tourist
              infrastructure. The drive to the airport from Kathmandu takes
              about 4 – 5 hours. However, the return could take a little more
              time, from 5 to 8 hours, depending on traffic. Regardless of the
              airline or the tour company you choose, these diversions will
              impact all the trekkers. Whosoever takes the Lukla flight to the
              Everest Region.
            </p>
            <h2> What time will we depart from Ramechhap to Lukla? </h2>
            <p>
              {" "}
              Like every other nation in this world, Tourism of Nepal has been
              severely hampered by this global pandemic. Government has imposed
              a ban on International flights and sealed borders with both India
              and China to stop the inflow of tourists. Tourism being one of the
              major revenue generators in Nepal’s Economy, many people are
              facing financial problems due to ongoing pandemic.
            </p>
            <h2>Should I postpone my Nepal trip to 2023? </h2>
            <p>
              Postponing your trip to 2023 would be an ideal decision rather
              than to cancel it. As the world is slowly bouncing from the trauma
              of the pandemic, 2023 would be a suitable year to get back into
              nature and add some good memories. This will also have a positive
              impact on the country's Economy.
            </p>
          </div>
          <div>
            <button className="coviBtn">Inquiry this trip</button>
            <h3>Top 10 Destinations for 2023</h3>
            <div style={{ color: "red" }}>
              <p> 1. Everest Base Camp</p>
              <p>2. Annapurna Base Camp</p>
              <p> 3. Ghorepani Poonhill</p>
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
      <Footer />
    </div>
  );
};

export default FirstBlog;
