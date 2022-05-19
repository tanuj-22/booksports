import React from "react";
import CommunitySportsContent from "../Components/CommunitySportsContent";
import HomePageMainContent from "../Components/HomePageMainContent";

import NavbarHome from "../Components/NavbarHome";

const Home = () => {
  return (
    <>
      <div className="HomePageContent">
        <div className="landingMainContent">&nbsp;</div>
        <NavbarHome />
        <HomePageMainContent />
      </div>
      <CommunitySportsContent />
    </>
  );
};

export default Home;
