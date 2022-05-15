import React from "react";
import CommunitySportsContent from "../Components/CommunitySportsContent";
import HomePageMainContent from "../Components/HomePageMainContent";
import NavbarHome from "../Components/NavbarHome";
import FooterHome from "../Components/FooterHome"


const Home = () => {
  


  return (
    <div className="HomePageContent">
      <div className="landingMainContent">&nbsp;</div>
      <NavbarHome />
      <HomePageMainContent/>
      {/* <CommunitySportsContent/> */}
      
      <FooterHome></FooterHome>
    </div>
  );
};

export default Home;
