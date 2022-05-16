import React from "react";
import CommunitySportsContent from "../Components/CommunitySportsContent";
import HomePageMainContent from "../Components/HomePageMainContent";
import NavbarHome from "../Components/NavbarHome";
import FooterHome from "../Components/FooterHome"
import BecomeMember from "../Components/BecomeMember";


const Home = () => {
  


  return (
    <div className="HomePageContent">
      <div className="landingMainContent">&nbsp;</div>
      {/* <NavbarHome />
      <HomePageMainContent/>
      <CommunitySportsContent/> */}
      <BecomeMember/>
      <FooterHome/>
    </div>
  );
};

export default Home;
