import React, { useEffect, useRef, useState } from "react";
import { Button, Container } from "react-bootstrap";
import lightningLogo from "../assests/lightningLogo.svg";
import MobileMockupLeft from "../assests/MobileMockupLeft.svg";
import MobileMockupRight from "../assests/MobileMockupRight.svg";
import MobileMockupIconLeft from "../assests/MobileMockupIconLeft.svg";
import MobileMockupIconRight from "../assests/MobileMockupIconRight.svg";

import "../css/HomePageMainContent.css";
const HomePageMainContent = () => {
  
  const inputRef = useRef(null);
  const [length,setLength] = useState(900);

  useEffect(() => {
    if(inputRef && inputRef.current && window.innerWidth <=768){
      setLength(inputRef.current.getBoundingClientRect().height +100)
    }
    else if(inputRef&& inputRef.current && window.innerWidth > 768){
      setLength(inputRef.current.getBoundingClientRect().height +200)
    }
  }, [useRef]);
  return (
    <>
      <div
        className="homePageContents"
        style={{height:length}}
      >
        <div ref={inputRef}className="HomeMainContent">
          <div className="bigText">Play sport. Simplified.</div>

          <div className="smallText">
            Unified solution of participating in sport games and activities.
            Play your favourite games anytime, anywhere with ease.
          </div>
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
          
          <div  className="mockup-background-container">
            <div
              // style={{ height: length.toString() + "vh" }}
              className="HomeMainContentBackground"
              
            >
              &nbsp;
            </div>
            <div className="mobile-mockup-container" >
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
      
    </>
  );
};

export default HomePageMainContent;
