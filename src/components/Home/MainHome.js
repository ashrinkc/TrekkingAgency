import React from "react";
import Navbar from "../BlogPage/Navbar.js";
import BestSelling from "./BestSelling.js";
import ClientContainer from "./Client.js";
import Explore from "./Explore.js";
import Footer from "./Footer.js";
import Header from "./Header.js";
import "./home.css";
import HomeBlogs from "./HomeBlogs.js";
import HomeGallery from "./HomeGallery.js";
import HomeNav from "./HomeNav.js";
import TrekkingPackageComponents from "./TrekkingPackageComponents.js";
const MainHome = () => {
  return (
    <div className="mainPage">
      <HomeNav />
      <Header />
      <Explore />
      <BestSelling />
      <TrekkingPackageComponents />
      <HomeGallery />
      <HomeBlogs />
      <ClientContainer />
      <Footer />
    </div>
  );
};

export default MainHome;
