// import components
import CommunitySportsContent from "../Components/CommunitySportsContent";
import HomePageMainContent from "../Components/HomePageMainContent";
import NavbarHome from "../Components/NavbarHome";
import FooterHome from "../Components/FooterHome";
import BecomeMember from "../Components/BecomeMember";
import Supporters from "../Components/Supporters";
import CommunicateandLead from "../Components/CommunicateandLead";
import SimpleDesign from "../Components/SimpleDesign";

const Home = () => {
  return (
    <>
      <div className="HomePageContent">
        <div className="landingMainContent">&nbsp;</div>
        <NavbarHome />
        <HomePageMainContent />
      </div>
      <CommunitySportsContent />
      <SimpleDesign />
      <CommunicateandLead />
      <Supporters />
      <BecomeMember />
      <FooterHome />
    </>
  );
};

export default Home;
