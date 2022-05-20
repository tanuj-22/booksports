// import components
import PricingTable from "./PricingTable";
import { Container, Row, Col } from "react-bootstrap";
// import css
import '../css/pricing.css';

const Pricing = () => {
  return (
    <div className="pricing-section">
        <Container>
            <p className="pricing-tagline">
                A plan for everyone
            </p>
            <p className="pricing-heading">
                Pricing
            </p>
            <div className="tab-section">
                <Container fluid>
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
            <PricingTable/>

        </Container>
    </div>
  )
}

export default Pricing