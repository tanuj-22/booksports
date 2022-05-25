import React, { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import lightningLogo from "../assests/lightningLogo.svg";
import MobileMockupLeft from "../assests/MobileMockupLeft.png";
import MobileMockupRight from "../assests/MobileMockupRight.png";
import MobileMockupIconLeft from "../assests/MobileMockupIconLeft.svg";
import MobileMockupIconRight from "../assests/MobileMockupIconRight.svg";

import "../css/HomePageMainContent.css";
const HomePageMainContent = () => {
  const inputRef = useRef(null);
  const [length, setLength] = useState(900);

  useEffect(() => {
    if (inputRef && inputRef.current && window.innerWidth <= 768) {
      setLength(inputRef.current.getBoundingClientRect().height + 100);
    } else if (inputRef && inputRef.current && window.innerWidth > 768) {
      setLength(inputRef.current.getBoundingClientRect().height + 200);
    }
  }, []);
  return (
    <>
      <div className="homePageContents" style={{ height: length }}>
        <div ref={inputRef} className="HomeMainContent">
          <div data-aos="fade-up" className="bigText">
            Play sport. Simplified.
          </div>

          <div className="smallText" data-aos="fade-up" data-aos-delay="400">
            Unified solution of participating in sport games and activities.
            Play your favourite games anytime, anywhere with ease.
          </div>
          <div
            className="join-btn-wrapper"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <Button
              className="JoinButton"
              id="join-waitlist-btn"
              variant="primary"
            >
              <span className="join-btn-text">Join Waitlist</span>
              <img
                src={lightningLogo}
                alt="lightning-logo"
                className="lightningLogo"
              />
            </Button>
          </div>

          <div
            aos-init
            aos-animate
            data-aos="zoom-in-up"
            data-aos-delay="500"
            className="mockup-background-container"
          >
            <div
              // style={{ height: length.toString() + "vh" }}
              className="HomeMainContentBackground"
            >
              &nbsp;
            </div>
            <div className="mobile-mockup-container">
              <img
                src={MobileMockupLeft}
                alt="mobile-mockup"
                className="mobileMockup"
                data-aos="fade-right"
                data-aos-delay="500"
                data-aos-once="false"
                data-aos-anchor="#join-waitlist-btn"
                data-aos-anchor-placement="top-bottom"
              />
              <img
                src={MobileMockupRight}
                alt="mobile-mockup"
                className="mobileMockup-1"
                data-aos="fade-left"
                data-aos-delay="500"
                data-aos-once="false"
                data-aos-anchor="#join-waitlist-btn"
                data-aos-anchor-placement="top-bottom"
              />
            </div>

            <div className="mockup-icons">
              <img
                src={MobileMockupIconLeft}
                className="mockup-icon-left"
                alt="mobile-mockup"
                data-aos="fade-right"
                data-aos-delay="600"
                data-aos-once="false"
                data-aos-anchor="#join-waitlist-btn"
                data-aos-anchor-placement="top-bottom"
              />
              <img
                src={MobileMockupIconRight}
                className="mockup-icon-right"
                alt="mobile-mockup"
                data-aos="fade-left"
                data-aos-delay="600"
                data-aos-once="false"
                data-aos-anchor="#join-waitlist-btn"
                data-aos-anchor-placement="top-bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageMainContent;
