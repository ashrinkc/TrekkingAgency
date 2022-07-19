import React from "react";
import imgone from "../../Img/homeGalleryone.png";
import vidImg from "../../Img/videoImg.png";
import galImg from "../../Img/GalleryImg.png";
const HomeGallery = () => {
  return (
    <div className="explore">
      <h1>Gallery</h1>
      <hr className="exphr" />
      <div className="HomeGallerygrid">
        <div className="homItem1">
          <img
            style={{ width: "500px", height: "250px", borderRadius: "2rem" }}
            src={vidImg}
          />
        </div>
        <div className="homItem2">
          <img
            style={{ width: "520px", height: "250px", borderRadius: "2rem" }}
            src={imgone}
          />
        </div>
        <div className="homItem3">
          <img
            style={{ width: "500px", height: "250px", borderRadius: "2rem" }}
            src={vidImg}
          />
        </div>
        <div className="homItem4">
          <img
            style={{ width: "250px", height: "250px", borderRadius: "2rem" }}
            src={galImg}
          />
        </div>
        <div className="homItem5">
          <img
            style={{ width: "250px", height: "250px", borderRadius: "2rem" }}
            src={galImg}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeGallery;
