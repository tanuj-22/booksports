// import css
import "../css/become-member.css";

// import bootstrap
import { Button } from "react-bootstrap";

// import assets
import lightningLogo from "../assests/lightningLogo.svg";
import designofeclipse from "../assests/designofeclipsses.svg";

const BecomeMember = () => {
  return (
    <div
      className="become-member"
      data-aos="fade-up"
      data-aos-delay="400"
      data-aos-duration="600"
      data-aos-easing="ease-in-out"
      data-aos-anchor-placement="top-center"
    >
      <p
        className="heading"
        data-aos="fade-up"
        data-aos-delay="600"
        data-aos-duration="600"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="top-center"
      >
        Be first to become our member
      </p>
      <p
        className="info"
        data-aos="fade-up"
        data-aos-delay="700"
        data-aos-duration="600"
        data-aos-easing="ease-in-out"
      >
        We value all our members and supporters, join our waiting list below to
        become our first users.
      </p>
      <div className="center-btn">
        <div
          className="join-btn-wrapper"
          data-aos="fade-up"
          data-aos-delay="800"
          data-aos-duration="600"
          data-aos-easing="ease-in-out"
        >
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
        </div>
      </div>
      <div className="design-of-eclipse">
        <img src={designofeclipse} alt="design-of-eclipse" />
      </div>
    </div>
  );
};

export default BecomeMember;
