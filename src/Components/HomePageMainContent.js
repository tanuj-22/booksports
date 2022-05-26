import React, { lazy, Suspense, useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import lightningLogo from "../assests/lightningLogo.svg";

import "../css/HomePageMainContent.css";

const MobileMockups = lazy(() => import("./HomeMainContent/MobileMockups"));

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
              size="lg"
              onClick={() => {
                window.open("https://airtable.com/shr34G4Am3wHWmyJq", "_blank");
              }}
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

            <Suspense fallback={<></>}>
              <MobileMockups />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageMainContent;
