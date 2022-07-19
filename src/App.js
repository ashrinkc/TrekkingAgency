import React from "react";
import "./App.css";
import MainBlog from "./components/BlogPage/MainBlog";
import MainContact from "./components/ContactUsPage/MainContact";
import MainCovid from "./components/CovidPage/MainCovid";
import MainFaq from "./components/FAQpage/MainFaq";
import MainHeliCharterGallery from "./components/HeliCharterGalleryPage/MainHeliCharterGallery";
import HeliMain from "./components/HeliCharterPage/HeliMain";
import MainHome from "./components/Home/MainHome";
import FirstBlog from "./components/IndividualBlogPage.js/FirstBlog";
import MainItenary from "./components/ItenaryPage/MainItenary";
import MainOurTeam from "./components/OurTeamPage/MainOurTeam";
import MainPayment from "./components/PaymentPage/MainPayment";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainHome />}></Route>
        <Route path="/contact" element={<MainContact />}></Route>
        <Route path="/heliCharter" element={<HeliMain />}></Route>
        <Route path="/blog" element={<MainBlog />}></Route>
        <Route path="/blogContent" element={<FirstBlog />}></Route>
        <Route
          path="/heliCharterGallery"
          element={<MainHeliCharterGallery />}
        ></Route>
        <Route path="/covid" element={<MainCovid />}></Route>
        <Route path="/faq" element={<MainFaq />}></Route>
        <Route path="/itenary" element={<MainItenary />}></Route>
        <Route path="/payment" element={<MainPayment />}></Route>
        <Route path="/ourTeam" element={<MainOurTeam />}></Route>
      </Routes>
      {/* <MainBlog /> */}
      {/* <MainHome /> */}
      {/* <MainItenary /> */}
      {/* <HeliMain /> */}
      {/* <MainHeliCharterGallery /> */}
      {/* <MainOurTeam /> */}
      {/* <MainContact /> */}
      {/* <MainCovid /> */}
      {/* <MainPayment /> */}
      {/* <MainFaq /> */}
      {/* <FirstBlog /> */}
    </div>
  );
};

export default App;
