import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import lightningLogo from "../assests/lightningLogo.svg";
import "../css/CommunitySportsContent.css";

import img8 from "../assests/masonryGrid/comm-sport-mobile.webp";
import ImageMasonryComponent from "./ImageMasonryComponent";
const CommunitySportsContent = () => {
  return (
    <div
      className="Comm-container"
      data-aos="fade-down"
      data-aos-anchor=".HomeMainContentBackground"
      data-aos-anchor-placement="top-center"
      data-aos-offset="0"
      
      
    >
      <Container className="block-container">
        <Row className="align-items-center" id="community">
          <Col
            className="column-container "
            md={{ span: 6, order: 2 }}
            data-aos="fade-down"
            data-aos-delay="50"
            data-aos-easing="ease-out"
            // data-aos-duration="500"
          >
            
            <ImageMasonryComponent/>

            <div
              className="mobile-img-container"
              data-aos="fade-up"
              // data-aos-delay="600"
              // data-aos-easing="ease-out"
              data-aos-duration="400"
            >
              <img src={img8} alt="img1" />
            </div>
          </Col>
          <Col
            className="column-container"
            md={{ span: 6, order: 1 }}
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-easing="ease-out"
            data-aos-duration="400"
          >
            <Container fluid className="com-sports-content-container">
              <div className="com-sports-content" >
                <h2>The power of community sports.</h2>
                <p>
                  Sport brings people from
                  diverse backgrounds together around a common goal, providing a
                  platform for collaboration, friendship development, and an
                  emphasis on similarities rather than differences.
                </p>
                <Button
                  className="JoinButton2"
                  id="join-waitlist-btn-2"
                  variant="primary"
                  onClick={() => {
                    window.open(
                      "https://airtable.com/shr34G4Am3wHWmyJq",
                      "_blank"
                    );
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
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CommunitySportsContent;
