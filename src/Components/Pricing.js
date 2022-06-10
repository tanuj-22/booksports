// import components
import PricingTable from "./PricingTable";
import { Container, Row, Col } from "react-bootstrap";
import {Tabs, Tab} from 'react-bootstrap'

// import css
import "../css/pricing.css";
// import assets
import savemoney from "../assests/savemoney.svg";

const Pricing = () => {
  return (
    <div className="pricing-section block-container-fp" id="pricing" data-aos="fade-up">

      <Container fluid style={{paddingLeft:0,paddingRight:0}}>
        <p className="pricing-tagline" data-aos="fade-up" data-aos-delay="100">
          A plan for everyone
        </p>
        <p className="pricing-heading" data-aos="fade-up" data-aos-delay="100">
          Pricing
        </p>
        <div className="tab-section">
          <div className="saveMoneyContainer save-money">
            <div className="">
              <img
                src={savemoney}
                alt=""
                data-aos="fade-down"
                data-aos-delay="500"
              />
            </div>
          </div>
          <Tabs defaultActiveKey="monthly" id="uncontrolled-tab-example" className="mb-3">
              <Tab eventKey="monthly" title="Monthly">
                <PricingTable 
                  price={19}
                />
              </Tab>
              <Tab eventKey="yearly" title="Yearly">
                <PricingTable
                  price={15}
                />
              </Tab>
          </Tabs>
        </div>

        
        
      </Container>
    </div>
  );
};

export default Pricing;
