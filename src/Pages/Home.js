// import components
import CommunitySportsContent from "../Components/CommunitySportsContent";
import HomePageMainContent from "../Components/HomePageMainContent";
import NavbarHome from "../Components/NavbarHome";
import FooterHome from "../Components/FooterHome"
import BecomeMember from "../Components/BecomeMember";
import Supporters from "../Components/Supporters";
import CommunicateandLead from "../Components/CommunicateandLead";


const Home = () => {
  


  return (
    <div className="HomePageContent">
      <div className="landingMainContent">&nbsp;</div>
      {/* <NavbarHome />
      <HomePageMainContent/>
      <CommunitySportsContent/> */}
      <CommunicateandLead/>
      <Supporters/>
      <BecomeMember/>
      <FooterHome/>
    </div>
  );
};

export default Home;
