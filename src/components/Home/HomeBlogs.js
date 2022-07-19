import React from "react";
import "./home.css";
import langtang from "../../Img/Annapurna.png";
import Everest from "../../Img/Everest.png";
import Annapurna from "../../Img/Annapurnatwo.png";
import Chorpat from "../../Img/trekThree.png";
import { useNavigate } from "react-router-dom";
const HomeBlogs = () => {
  const navigatee = useNavigate();
  const navigate = () => {
    navigatee("/blogContent");
  };
  return (
    <div className="explore">
      <h1>Blogs</h1>
      <hr className="exphr" />
      <div className="homeBlogOpt">
        <div>
          <img className="homeblogimg" src={langtang} />
          <p className="blogTitle">LangTang Trek</p>
        </div>
        <div>
          <img className="homeblogimg" src={Everest} />
          <p className="blogTitle">Everest Trek</p>
        </div>
        <div>
          <img className="homeblogimg" src={Annapurna} />
          <p className="blogTitle">Ghorepani Trek</p>
        </div>
        <div>
          <img className="homeblogimg" src={Chorpat} />
          <p className="blogTitle">Everest Trek</p>
        </div>
      </div>
      <div className="homeblogContainer">
        <div className="AnnapurnaInfo">
          <div>
            <img className="aNNiNFOiMG" src={Everest} />
          </div>
          <div className="AnnInfoContainer">
            <h1>Annapurna Circuit Trek</h1>
            <p>
              Trek through the incredible Annapurna region and be awed by the
              Nepalese Himalayas. These snow-capped peaks, mist-shrouded
              valleys, isolated communities and remote monasteries will inspire
              those with a bold spirit and a yearning for a definitive nature
              experience. Reach altitudes of more than 5000 metres, discover the
              ancestral traditions of the local people and immerse yourself
              completely in the spectacular mountain wilderness of the Annapurna
              Circuit. This is a challenging trip, but the sense of
              accomplishment will leave even the most seasoned trekker with some
              unforgettable memories.
            </p>
            <button className="homeBlogbtn" onClick={navigate}>
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBlogs;
