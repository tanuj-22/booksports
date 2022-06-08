// import bootstrap
import { Container, Row, Col } from "react-bootstrap";

// import css
import "../css/communicate.css";

// import assets
import socialmediacircle from "../assests/socialmediacircle.svg";
import messagingside from "../assests/messagingside.webp";

const CommunicateandLead = () => {
  return (
    <div className="communicate-and-lead block-container-fp" data-aos="fade">
      <Container fluid style={{padding:0}}>
        <Row>
          <Col
            xs={12}
            md={6}
            className="communicate-left"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="400"
            data-aos-easing="ease-in-out"
            data-aos-anchor=".simple-design"
            data-aos-anchor-placement="bottom-center"
          >
            <img
              src={messagingside}
              alt="messaging-side"
              className="messaging-side"
            />
          </Col>
          <Col
            xs={12}
            md={6}
            className="communicate-right"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="400"
            data-aos-easing="ease-in-out"
            data-aos-anchor=".simple-design"
            data-aos-anchor-placement="bottom-center"
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
