// import React, { lazy, Suspense, useEffect, useRef, useState } from "react";
import React, { lazy, Suspense} from "react";
import { Button } from "react-bootstrap";
import lightningLogo from "../assests/lightningLogo.svg";

import "../css/HomePageMainContent.css";

const MobileMockups = lazy(() => import("./HomeMainContent/MobileMockups"));

const HomePageMainContent = () => {
  // const inputRef = useRef(null);
  // const [length, setLength] = useState(900);

  // useEffect(() => {
  //   if (inputRef && inputRef.current && window.innerWidth <= 768) {
  //     setLength(inputRef.current.getBoundingClientRect().height + 100);
  //   } else if (inputRef && inputRef.current && window.innerWidth > 768) {
  //     setLength(inputRef.current.getBoundingClientRect().height + 200);
  //   }

  // }, []);
  // const handleResize = () => {
  //   if (inputRef && inputRef.current && window.innerWidth <= 768) {
  //     setLength(inputRef.current.getBoundingClientRect().height + 100);
  //   } else if (inputRef && inputRef.current && window.innerWidth > 768) {
  //     setLength(inputRef.current.getBoundingClientRect().height + 200);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("resize", handleResize, false);
  // }, []);
  return (
    <>
    <div className="homePageContents" style={{ height: "max-content" }}>
      {/* <div className="homePageContents" style={{ height: length }}> */}
        <div className="HomeMainContent">
          <div className="block-container-fp">

          
          <div data-aos="fade-up" className="bigText">
            Play sport. Simplified.
          </div>

          <div className="smallText" data-aos="fade-up" data-aos-delay="50">
            Unified solution of participating in sport games and activities.
            <div className="desktop-screen-break">
              <br />
            </div>
            &nbsp;Play your favourite games anytime, anywhere with ease.
          </div>
          <br />
          <div
            className="join-btn-wrapper"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <Button
              className="JoinButton "
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
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-delay="150"
            className="mockup-background-container block-container-fp"
          >
            <div
              // style={{ height: length.toString() + "vh" }}
              className="HomeMainContentBackground "
            >
              &nbsp;

            <Suspense fallback={<></>}>
              <MobileMockups />
            </Suspense>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageMainContent;
