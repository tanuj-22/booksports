import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import lightningLogo from "../assests/lightningLogo.svg";
import "../css/CommunitySportsContent.css";
const CommunitySportsContent = () => {
  return (
    <div className="Comm-container">
      <Container>
        <Row>
          <Col md={{ span: 6, order: 2 }}>Pics</Col>
          <Col md={{ span: 6, order: 1 }}>
            <Container>
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
