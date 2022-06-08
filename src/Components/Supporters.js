// import css
import "../css/supporters.css";

// import bootstrap
import { Container, Row, Col } from "react-bootstrap";

// import cards
import SupporterResponse from "./SupporterResponse";

// import assets
import supporter1 from "../assests/supporter01.png";
import supporter2 from "../assests/supporter02.png";
import supporter3 from "../assests/supporter03.png";

const Supporters = () => {
  return (
    <div
      className="our-supporters block-container-fp"
      id="feedback"
      data-aos="fade-up"
      data-aos-delay="50"
    >
      {/* taglines */}
      <p className="tagline1" data-aos="fade-up" data-aos-delay="100">
        We love our SUPPORTERS
      </p>
      <p className="tagline2" data-aos="fade-up" data-aos-delay="100">
        And they seem to love us
      </p>
      {/* supporter cards */}
      <div className="supporters-cards">
        <Container fluid style={{paddingLeft:0,paddingRight:0}}>
          <Row>
            <Col sm={12} md={4}>
              <SupporterResponse
                img={supporter1}
                intro="Xi Chen, CEO, Fortune Auslink"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        Arcu, elit, a volutpat enim, massa id. Vestibulum faucibus."
                dataAos="zoom-in"
                dataAosDelay={10}
              />
            </Col>
            <Col sm={12} md={4}>
              <SupporterResponse
                img={supporter2}
                intro="Cameron Williamson, CEO, Stripe"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Arcu, elit, a volutpat enim, massa id. Vestibulum faucibus."
                dataAos="zoom-in"
                dataAosDelay={50}
              />
            </Col>
            <Col sm={12} md={4}>
              <SupporterResponse
                img={supporter3}
                intro="Cameron Williamson, CEO, Stripe"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Arcu, elit, a volutpat enim, massa id. Vestibulum faucibus."
                dataAos="zoom-in"
                dataAosDelay={100}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Supporters;
