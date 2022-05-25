// import components
import PricingTable from "./PricingTable";
import { Container, Row, Col } from "react-bootstrap";
// import css
import "../css/pricing.css";
// import assets
import savemoney from "../assests/savemoney.svg";

const Pricing = () => {
  return (
    <div className="pricing-section" id="pricing" data-aos="fade-up">
      <Container>
        <p className="pricing-tagline" data-aos="fade-up" data-aos-delay="400">
          A plan for everyone
        </p>
        <p className="pricing-heading" data-aos="fade-up" data-aos-delay="600">
          Pricing
        </p>
        <div className="tab-section">
          <Container fluid data-aos="fade-up" data-aos-delay="800">
            <Row>
              <Col xs={6}>
                <p className="tab-section-yearly">Yearly</p>
              </Col>
              <Col xs={6}>
                <p className="tab-section-monthly">Monthly</p>
              </Col>
            </Row>
          </Container>
        </div>

        {/* vector */}
        <div
          className="saveMoneyContainer"
          data-aos="fade-down"
          data-aos-delay="1000"
        >
          <div className="save-money">
            <img src={savemoney} alt="" />
          </div>
        </div>
        <PricingTable />
      </Container>
    </div>
  );
};

export default Pricing;
