// import bootstrap
import {Container, Row, Col, Button} from 'react-bootstrap';
// import assets
import lightningLogo from '../assests/lightningLogo.svg'
import fastpayouts from '../assests/fastpayouts.webp'
// import css
import '../css/fast-payouts.css'

const FastPayouts = () => {
  return (
    <div className='fast-payouts block-container-fp' data-aos="fade-right">
      <Container fluid style={{padding:0}}>
        <Container fluid style={{padding:0}}>
          <Row>
            <Col md={12} lg={6}>
              <div className='fast-payouts-left'>
                <button className='stripe-btn'>
                  Stripe
                </button>
                <br/>
                <p className='fast-payouts-heading'>
                  Fast Payouts
                </p>
                <p className='fast-payouts-info'>
                  You can charge an entry fee if there are any events that have associated costs. 
                  People will not be able to sign up for the event unless they pay the fee.
                </p>
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
            </Col>
            <Col md={12} lg={6}>
              <div className="fast-payouts-right" >
                <img src={fastpayouts} alt="fast-payouts" />
              </div>
            </Col>
          </Row>
        </Container>
          {/* <img width={"100%"} src={fastpayouts} alt="fastpayouts" /> */}
      </Container>
    </div>
  )
}

export default FastPayouts