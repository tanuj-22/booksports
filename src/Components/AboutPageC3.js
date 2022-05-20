import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import aboutPhone2 from "../assests/about-phone-2.svg";

const AboutPageC3 = ({tagName}) => {
  return (
    <>
      <Row className="align-items-start">
        <Col className="column-container " md={{ span: 6, order: 2 }}>
          <img src={aboutPhone2} alt="aboutPhone2" className="aboutPhone2" />
        </Col>
        <Col className="column-container about-us-3 about-us-1" md={{ span: 6, order: 1 }}>
          <p className="feature-tag-name">{tagName}</p>
          <h3 className="feature-heading">Provide excellent management</h3>
          <p className="feature-content">
            consectetur adipising elit, sed do elusmod tempor incididunt ut
            labore et dolore magna q;oqua/ Ut enim ad minim veniam. ques nosturd
            exercitation
          </p>
          <Button className="feature-btn">LEARN MORE</Button>
        </Col>
      </Row>
    </>
  );
};

export default AboutPageC3;
