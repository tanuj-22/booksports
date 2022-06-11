// import bootstrap
import { Container, Row, Col } from "react-bootstrap";

// import css
import "../css/communicate.css";

// import assets
import socialmediacircle from "../assests/socialmediacircle.svg";
import messageImg1 from "../assests/messageImg1.webp";
import messageImgL from "../assests/messageImgL.webp";
import messageImgR from "../assests/messageImgR.webp";

const CommunicateandLead = () => {
  return (
    <div className="communicate-and-lead block-container-fp" data-aos="fade">
      <Container fluid style={{padding:0}}>
        <Row style={{margin:0,padding:0}}>
          <Col
            md={12}
            lg={6}
            className="communicate-left mobileRowCol2"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="400"
            data-aos-easing="ease-in-out"
            data-aos-anchor=".simple-design"
            data-aos-anchor-placement="bottom-center"
            style={{padding:0}}
          >
            {/* <div className="messaging-side-desktop">
              <img
                src={messagingside}
                alt="messaging-side"
              />
            </div>
            <div className="messaging-side-mob">
              <img
                src={messagingsidemob}
                alt="messaging-side"
            />
            </div> */}
            <div className="purpleBackgroundContainer2">
              <div className="mock-img-box2" style={{ position: "relative" }}>
                <img src={messageImg1} alt="basic info" />
                <img src={messageImgL} alt="basic info" />
                <img src={messageImgR} alt="basic info" />
              </div>
            </div>
            
          </Col>
          <Col
            md={12}
            lg={6}
            className="communicate-right"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="400"
            data-aos-easing="ease-in-out"
            data-aos-anchor=".simple-design"
            data-aos-anchor-placement="bottom-center"
            style={{padding:0}}
          >
            <p className="communicate-tagline">
              Communicate and lead all-in-one place. And it is free.
            </p>
            <img
              src={socialmediacircle}
              alt="social-media-circle"
              className="social-media-circle"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CommunicateandLead;
