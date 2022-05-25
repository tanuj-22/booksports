// import components
import CommunitySportsContent from "../Components/CommunitySportsContent";
import HomePageMainContent from "../Components/HomePageMainContent";
import NavbarHome from "../Components/NavbarHome";
import FooterHome from "../Components/FooterHome";
import BecomeMember from "../Components/BecomeMember";
import Supporters from "../Components/Supporters";
import CommunicateandLead from "../Components/CommunicateandLead";
import SimpleDesign from "../Components/SimpleDesign";
import Pricing from "../Components/Pricing";
import CreateSportEvent from "../Components/CreateSportEvent";
import FastPayouts from "../Components/FastPayouts";

const Home = () => {
  return (
    <>
      <div className="HomePageContent">
        <div className="landingMainContent">&nbsp;</div>
        <NavbarHome
          data-aos="fade-down-right"
          data-aos-easing="ease-out"
          data-aos-duration="400"
        />
        <HomePageMainContent />
      </div>
      <CommunitySportsContent />
      <CreateSportEvent/>
      <SimpleDesign />
      <CommunicateandLead />
      <FastPayouts/>
      <Supporters />
      <Pricing />
      <BecomeMember />
      <FooterHome />
    </>
  );
};

export default Home;
