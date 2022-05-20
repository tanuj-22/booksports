import React from "react";
import "../css/about.css";

const AboutPageC1Cards = ({
  cardHeading,
  cardContent,
  cardIcon,
  cardIconFilled,
}) => {
  return (
    <>
      <div className="aboutContentsPage1Container">
        <div className="about-cards-container">
          <h4>{cardHeading}</h4>

          <p>{cardContent}</p>
        </div>
        <div className="abt-expand-link">
          <img
            className="icon-2 icon-expand-2"
            id="cardIcon2"
            src={cardIcon}
            alt="cardHeading"
          />
          <img
            className="icon-2 icon-contract-2"
            id="cardIcon2Filled"
            src={cardIconFilled}
            alt="cardHeading2"
          />
        </div>
      </div>
    </>
  );
};

export default AboutPageC1Cards;
