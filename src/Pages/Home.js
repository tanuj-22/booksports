// import components
// import NavbarHome from "../Components/NavbarHome";
// import FooterHome from "../Components/FooterHome";
// import BecomeMember from "../Components/BecomeMember";
// import Supporters from "../Components/Supporters";
// import CommunicateandLead from "../Components/CommunicateandLead";
// import SimpleDesign from "../Components/SimpleDesign";
// import Pricing from "../Components/Pricing";
// import CreateSportEvent from "../Components/CreateSportEvent";
// import FastPayouts from "../Components/FastPayouts";
// import Testimony from "../Components/Testimony";
// import CommunitySportsContent from "../Components/CommunitySportsContent";
import HomePageMainContent from "../Components/HomePageMainContent";
import { lazy, Suspense } from "react";
import Loader from "../Components/Loader";
const NavbarHome = lazy(() => import("../Components/NavbarHome"));
const CommunitySportsContent = lazy(() =>
  import("../Components/CommunitySportsContent")
);
const SimpleDesign = lazy(() => import("../Components/SimpleDesign"));
const CommunicateandLead = lazy(() =>
  import("../Components/CommunicateandLead")
);
const CreateSportEvent = lazy(() => import("../Components/CreateSportEvent"));
const Supporters = lazy(() => import("../Components/Supporters"));
const Pricing = lazy(() => import("../Components/Pricing"));
const Testimony = lazy(() => import("../Components/Testimony"));
const BecomeMember = lazy(() => import("../Components/BecomeMember"));
const FooterHome = lazy(() => import("../Components/FooterHome"));
const FastPayouts = lazy(() => import("../Components/FastPayouts"));
const Home = () => {
  return (
    <>
      <div className="d-grid WholePageGrid">
        <div className="HomePageContent">
          <div className="landingMainContent">&nbsp;</div>
          <NavbarHome
            data-aos="fade-down-right"
            data-aos-easing="ease-out"
            data-aos-duration="400"
          />
          <HomePageMainContent />
        </div>
        {/* <CommunitySportsContent />
      <CreateSportEvent />
      <SimpleDesign />
      <CommunicateandLead />
      <FastPayouts />
      <Supporters />
      <Pricing />
      <Testimony />
      <BecomeMember />
      <FooterHome /> */}
        {[
          <CommunitySportsContent />,
          <CreateSportEvent />,
          <SimpleDesign />,
          <CommunicateandLead />,
          <FastPayouts />,
          <Supporters />,
          <Pricing />,
          <Testimony />,
          <>
            <BecomeMember />
            <FooterHome />
          </>,
        ].map((component, index) => {
          return (
            <Suspense fallback={<Loader />} key={index}>
              <div>{component}</div>
            </Suspense>
          );
        })}
      </div>
    </>
  );
};

export default Home;
