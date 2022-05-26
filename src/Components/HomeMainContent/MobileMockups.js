import React from "react";
import MobileMockupLeft from "../../assests/MobileMockupLeft.webp";
import MobileMockupRight from "../../assests/MobileMockupRight.webp";
import MobileMockupIconLeft from "../../assests/MobileMockupIconLeft.svg";
import MobileMockupIconRight from "../../assests/MobileMockupIconRight.svg";

const MobileMockups = () => {
  return (
    <>
      <div
        className="mobile-mockup-container"
        style={{ overflowX: "hidden", height: "150%" }}
      >
        <img
          src={MobileMockupLeft}
          alt="mobile-mockup"
          className="mobileMockup"
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-once="false"
          data-aos-anchor="#join-waitlist-btn"
          data-aos-anchor-placement="top-bottom"
        />
        <img
          src={MobileMockupRight}
          alt="mobile-mockup"
          className="mobileMockup-1"
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-once="false"
          data-aos-anchor="#join-waitlist-btn"
          data-aos-anchor-placement="top-bottom"
        />
      </div>

      <div className="mockup-icons">
        <img
          src={MobileMockupIconLeft}
          className="mockup-icon-left"
          alt="mobile-mockup"
          data-aos="fade-right"
          data-aos-delay="250"
          data-aos-once="false"
          data-aos-anchor="#join-waitlist-btn"
          data-aos-anchor-placement="top-bottom"
        />
        <img
          src={MobileMockupIconRight}
          className="mockup-icon-right"
          alt="mobile-mockup"
          data-aos="fade-left"
          data-aos-delay="250"
          data-aos-once="false"
          data-aos-anchor="#join-waitlist-btn"
          data-aos-anchor-placement="top-bottom"
        />
      </div>
    </>
  );
};

export default MobileMockups;
