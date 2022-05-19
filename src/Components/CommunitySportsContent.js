import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import lightningLogo from "../assests/lightningLogo.svg";
import "../css/CommunitySportsContent.css";
import img1 from "../assests/masonryGrid/33.png";
import img2 from "../assests/masonryGrid/34.png";
import img3 from "../assests/masonryGrid/35.png";
import img4 from "../assests/masonryGrid/36.png";
import img5 from "../assests/masonryGrid/37.png";
import img6 from "../assests/masonryGrid/39.png";
import img7 from "../assests/masonryGrid/41.png";
import img8 from "../assests/masonryGrid/comm-sport-mobile.png";
const CommunitySportsContent = () => {
  return (
    <div className="Comm-container">
      <Container className="block-container">
        <Row className="align-items-start">
          <Col className="column-container " md={{ span: 6, order: 2 }}>
            <div className="img-container" id="left-container-img">
              {[img1, img3, img5, img2, img4, img6, img7].map((img, index) => {
                return <img src={img} key={index} alt={"img" + index} />;
              })}
            </div>
            
            <div className="mobile-img-container">
              <img src={img8} alt="img1" />
            </div>
          </Col>
          <Col className="column-container" md={{ span: 6, order: 1 }}>
            <Container fluid className="com-sports-content-container">
              <div className="com-sports-content">
                <h2>The power of community sports.</h2>
                <p>
                  The power of community sports. Sport brings people from
                  diverse backgrounds together around a common goal, providing a
                  platform for collaboration, friendship development, and an
                  emphasis on similarities rather than differences.
                </p>
                <Button
                  className="JoinButton2"
                  id="join-waitlist-btn-2"
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
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CommunitySportsContent;
