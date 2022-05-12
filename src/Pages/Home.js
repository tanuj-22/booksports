import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import lightningLogo from "../assests/lightningLogo.svg";
import NavbarHome from "../Components/NavbarHome";

const Home = () => {
  return (
    <div className="HomePageContent">
      <div className="landingMainContent">&nbsp;</div>
      <NavbarHome />
      <div className="HomeMainContent">
        Play sport. Simplified.
        <div className="smallText">
          Unified solution of participating in sport games and activities. Play
          your favourite games anytime, anywhere with ease.
        </div>
        <Button className="JoinButton" variant="primary">
          <span className="join-btn-text">Join Waitlist</span>
          <img
            src={lightningLogo}
            alt="lightning-logo"
            className="lightningLogo"
          />
        </Button>
        <div className="HomeMainContentBackground">&nbsp;</div>
      </div>
    </div>
  );
};

export default Home;
