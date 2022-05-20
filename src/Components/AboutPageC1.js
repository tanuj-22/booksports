import React from "react";
import { Col, Row } from "react-bootstrap";
import aboutPhone1 from "../assests/about-phone-1.svg";
import "../css/about.css";
import AboutPageC1Cards from "./AboutPageC1Cards";
import networkClock from "../assests/network-icon.svg";
import openness from "../assests/openness-icon.svg";
import society from "../assests/society-icon.svg";
import networkClockfilled from "../assests/network-icon-filled.svg";
import opennessFilled from "../assests/openness-icon-filled.svg";
import societyFilled from "../assests/society-icon-filled.svg";

const AboutPageC1 = () => {
  return (
    <>
      <Row className="align-items-start">
        <Col className="column-container " md={{ span: 6, order: 1 }}>
          <div className="abt-img-wrapper">
            <img src={aboutPhone1} alt="aboutPhone1" className="aboutPhone1" />
          </div>
        </Col>
        <Col className="column-container about-us-1" md={{ span: 6, order: 2 }}>
          <p>ABOUT US</p>
          <h3>Our Values</h3>
          <AboutPageC1Cards
            cardHeading={"Network"}
            cardContent={
              "Asertively maintain click and mortar quality vectors through next-generation technologies uniquely."
            }
            cardIcon={networkClock}
            cardIconFilled={networkClockfilled}
          />
          <AboutPageC1Cards
            cardHeading={"Society"}
            cardContent={
              "Asertively maintain click and mortar quality vectors through next-generation technologies uniquely."
            }
            cardIcon={society}
            cardIconFilled={societyFilled}
          />
          <AboutPageC1Cards
            cardHeading={"Openness"}
            cardContent={
              "Asertively maintain click and mortar quality vectors through next-generation technologies uniquely."
            }
            cardIcon={openness}
            cardIconFilled={opennessFilled}
          />
        </Col>
      </Row>
    </>
  );
};

export default AboutPageC1;
