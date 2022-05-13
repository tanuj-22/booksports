import React, { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import lightningLogo from "../assests/lightningLogo.svg";
import NavbarHome from "../Components/NavbarHome";

import MobileMockupLeft from "../assests/MobileMockupLeft.svg";
import MobileMockupRight from "../assests/MobileMockupRight.svg";
import MobileMockupIconLeft from "../assests/MobileMockupIconLeft.svg";
import MobileMockupIconRight from "../assests/MobileMockupIconRight.svg";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  const inputRef = useRef();
  const [length, setlength] = useState(30);
  useEffect(() => {
    if (window.innerWidth < 560) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);
  useEffect(() => {
    if (inputRef && inputRef.current && window.innerWidth >= 560) {
      setlength(
        ((window.innerHeight -
          inputRef.current.getBoundingClientRect().y +
          inputRef.current.getBoundingClientRect().height) *
          100) /
          window.innerHeight -
          10
      );
    } else if (inputRef && inputRef.current && window.innerWidth < 560) {
      setlength(
        ((window.innerHeight -
          inputRef.current.getBoundingClientRect().y +
          inputRef.current.getBoundingClientRect().height) *
          100) /
          window.innerHeight -
          6
      );
    }
  }, []);

  return (
    <div className="HomePageContent">
      <div className="landingMainContent">&nbsp;</div>
      <NavbarHome />
      <div className="HomeMainContent">
        <div className="bigText">Play sport. Simplified.</div>

        <div className="smallText">
          Unified solution of participating in sport games and activities. Play
          your favourite games anytime, anywhere with ease.
        </div>
        <Button className="JoinButton" id="join-waitlist-btn" variant="primary">
          <span className="join-btn-text">Join Waitlist</span>
          <img
            src={lightningLogo}
            alt="lightning-logo"
            className="lightningLogo"
          />
        </Button>
        <div ref={inputRef} className="mockup-background-container">
          <div
            style={{ height: length.toString() + "vh" }}
            className="HomeMainContentBackground"
          >
            &nbsp;
          </div>
          <div className="mobile-mockup-container">
            <img
              src={MobileMockupLeft}
              alt="mobile-mockup"
              className="mobileMockup"
            />
            <img
              src={MobileMockupRight}
              alt="mobile-mockup"
              className="mobileMockup-1"
            />
          </div>
          <div className="mockup-icons">
            <img
              src={MobileMockupIconLeft}
              className="mockup-icon-left"
              alt="mobile-mockup"
            />
            <img
              src={MobileMockupIconRight}
              className="mockup-icon-right"
              alt="mobile-mockup"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
