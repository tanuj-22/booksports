import React from "react";
import { Container } from "react-bootstrap";
import Navbar2 from "../Components/Navbar2";
import Newsletter from "../Components/Newsletter";
import Footer2 from "../Components/Footer2";
import aboutbg from "../assests/about-bg.svg";
import aboutbg1 from "../assests/about-bg-1.svg";
import AboutPageC1 from "../Components/AboutPageC1";
import AboutPageC2 from "../Components/AboutPageC2";

const About = () => {
  return (
    <>
      <div className="aboutPage" id="abtPageAos">
        <div className="navNHeader">
          <Container>
            <div className="navNHeaderContent">
              <div className="navbar-2">
                <Navbar2 />
              </div>
              <div className="header-title">
                <h2>About Us</h2>
              </div>
            </div>
          </Container>
          <img src={aboutbg} alt="aboutbg" className="aboutbg" />
          <img src={aboutbg1} alt="aboutbg1" className="aboutbg1" />
        </div>
        <div className="aboutPageContent">
          <Container fluid className="aboutPageContentContainer">
            <AboutPageC1/>
            <AboutPageC2/>
            
          </Container>
        </div>
        <div className="newsletter-subscribe-container">
          <Newsletter />
        </div>
        <div className="footer-2-container">
          <Footer2 />
        </div>
      </div>
    </>
  );
};

export default About;
