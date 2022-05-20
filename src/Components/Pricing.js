// import components
import PricingTable from "./PricingTable";
import { Container } from "react-bootstrap";
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
            <p>
                <span>
                    Yearly
                </span>
                <span>
                    Monthly
                </span>
            </p>
            <PricingTable/>
        </Container>
    </div>
  )
}

export default Pricing