import React, { useState } from "react";
import "../css/about.css";
import usersBtn from "../assests/users-btn.svg";
import venuesBtn from "../assests/venues-btn.svg";
import trainersBtn from "../assests/trainers-btn.svg";
import { Col, Row } from "react-bootstrap";
import AboutPageC3 from "./AboutPageC3";
const AboutPageC2 = () => {
  const [length, setlength] = useState("20%");

  return (
    <>
      <div className="feature-section-container" id="features">
        <p>FEATURE</p>
        <h3>Discover what BookSports can do for you</h3>
        <div className="feature-section-content-selection">
          <Row className="align-items-center text-center">
            <Col xs={4}>
              <button onClick={() => setlength("20%")}>
                <img className="img-btns" src={usersBtn} alt="for users" />
              </button>
            </Col>
            <Col xs={4}>
              <button onClick={() => setlength("50%")}>
                <img className="img-btns" src={venuesBtn} alt="for venues" />
              </button>
            </Col>
            <Col xs={4}>
              <button onClick={() => setlength("80%")}>
                <img
                  className="img-btns"
                  src={trainersBtn}
                  alt="for trainers"
                />
              </button>
            </Col>
          </Row>
          <Row className="feature-section-content-selection-row">
            {/* <div className="feature-selection-line"></div> */}
            <hr align="center" className="feature-selection-line" />
            <hr
              align="center"
              style={{ left: length }}
              className="btn-selection-line"
            />
          </Row>
        </div>
      </div>
      {length == "20%" && <AboutPageC3 tagName={"FOR USERS"} />}
      {length == "50%" && <AboutPageC3 tagName={"FOR VENUES"} />}
      {length == "80%" && <AboutPageC3 tagName={"FOR TRAINERS"} />}
    </>
  );
};

export default AboutPageC2;
