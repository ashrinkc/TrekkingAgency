import React, { useState } from "react";
import "./new.css";
import Annapurna from "../../Img/Annapurna.png";
import Anntwo from "../../Img/Annapurnatwo.png";
import LangTang from "../../Img/LangTang.png";
import Everest from "../../Img/Everest.png";
import exit from "../../Img/exit.png";
const BlogComponent = () => {
  const [display, SetDisplay] = useState(null);
  const View = () => {
    if (!display) {
      SetDisplay(true);
    }
    if (display) {
      SetDisplay("");
    }
  };
  return (
    <div className="blogposts">
      <div className="blogcomponents">
        <div>
          <img className="insideImg" src={Annapurna} />
        </div>
        <div className="title">
          <h1>The Annapurna Range</h1>
          <p>
            Trek through the incredible Annapurna region and be awed by the
            Nepalese Himalayas. These snow-capped peaks, mist-shrouded valleys,
            isolated communities and remote monasteries will inspire those with
            a bold spirit and a yearning for a definitive nature experience.
          </p>
          <button className="blogReadbtn">
            Read more
            <img src={exit} />
          </button>
        </div>
      </div>
      <div className="blogcomponents">
        <div className="title">
          <h1>GhorePani Poonhill Trek</h1>
          <p>
            Ghorepani Poonhill Trek, also known as Annapurna Sunrise Trekking,
            is a short, popular, and beautiful trek in the lap of the Annapurna
            region. Ghorepani, a picturesque mountain region above sea level, is
            a unique and busy trekking place in the Annapurna region. Ghorepani
            Poonhill Trek is an excellent opportunity for beginners and
            experienced trekkers to have an enjoyable trekking experience in the
            Himalayas.
          </p>
          <button className="blogReadbtn">
            Read more
            <img src={exit} />
          </button>
        </div>
        <div>
          <img className="insideImg" src={Anntwo} />
        </div>
      </div>
      <div className="blogcomponents">
        <div>
          <img className="insideImg" src={LangTang} />
        </div>
        <div className="title">
          <h1>LangTang Trek</h1>
          <p>
            The Langtang trek is one of Nepal’s shortest trekking trails. It
            offers spectacular beauty from the jungle with trees and monkeys at
            lower heights to glaciers and ice peaks at higher elevations.
            However Langtang tour trekking in Nepal is difficult from the start.
            Trekkers will counter several long and steep ascents, as is typical
            of Nepalese trekking.
          </p>
          <button className="blogReadbtn">
            Read more
            <img src={exit} />
          </button>
        </div>
      </div>
      <div className="blogcomponents">
        <div className="title">
          <h1>Everest Trek</h1>
          <p>
            Everest is more than a mountain and the journey to its base camp is
            more than just a trek. Along a route dubbed by some as "the steps to
            heaven," every bend in the trail provides another photo opportunity
            — beautiful forests, Sherpa villages, glacial moraines, and
            foothills. For active adventurers not afraid to break a sweat, our
            full trekking support staff will bring you close to local cultures
            before opening a window to the top of the world.
          </p>
          <button className="blogReadbtn">
            Read more
            <img src={exit} />
          </button>
        </div>
        <div>
          <img className="insideImg" src={Everest} />
        </div>
      </div>
      {display && (
        <>
          <div className="blogcomponents">
            <div>
              <img className="insideImg" src={LangTang} />
            </div>
            <div className="title">
              <h1>LangTang Trek</h1>
              <p>
                Trek through the incredible Annapurna region and be saved by the
                nepalese Himalayas These snow-caped peaks,mist-shrouded valleys,
                isolated communities and remote monastries will inspire those
                with a bold spirit and a yearning for a definitive nature
                experience
              </p>
              <button className="blogReadbtn">
                Read more
                <img src={exit} />
              </button>
            </div>
          </div>
        </>
      )}
      {display && (
        <div className="blogcomponents">
          <div className="title">
            <h1>Everest Trek</h1>
            <p>
              Trek through the incredible Annapurna region and be saved by the
              nepalese Himalayas These snow-caped peaks,mist-shrouded valleys,
              isolated communities and remote monastries will inspire those with
              a bold spirit and a yearning for a definitive nature experience
            </p>
            <button className="blogReadbtn">
              Read more
              <img src={exit} />
            </button>
          </div>
          <div>
            <img className="insideImg" src={Annapurna} />
          </div>
        </div>
      )}
      <div className="view">
        <button className="blogReadbtn" onClick={View}>
          {display ? "View Less" : "View More"}
        </button>
      </div>
    </div>
  );
};

export default BlogComponent;
