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
      data-aos="fade-right"
      data-aos-delay="50"
      data-aos-duration="400"
      data-aos-easing="ease-in-out"
      data-aos-once="true"
    >
      <p
        className="heading"
        data-aos="fade-right"
        data-aos-delay="100"
        data-aos-duration="400"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
      >
        Be first to become our member
      </p>
      <p
        className="info"
        data-aos="fade-right"
        data-aos-delay="100"
        data-aos-duration="400"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
      >
        We value all our members and supporters, join our waiting list below to
        become our first users.
      </p>
      <div className="center-btn">
        <div
          className="join-btn-wrapper"
          data-aos="fade-right"
          data-aos-delay="100"
          data-aos-duration="400"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          <Button
            className="JoinButton"
            id="join-waitlist-btn"
            variant="primary"
            onClick={() => {
              window.open("https://airtable.com/shr34G4Am3wHWmyJq", "_blank");
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
      </div>
      <div className="design-of-eclipse">
        <img src={designofeclipse} alt="design-of-eclipse" />
      </div>
    </div>
  );
};

export default BecomeMember;
