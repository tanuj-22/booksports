// import bootstrap
import {Container, Row, Col, Button} from 'react-bootstrap';
// import assets
import lightningLogo from '../assests/lightningLogo.svg'
// import css
import '../css/fast-payouts.css'

const FastPayouts = () => {
  return (
    <div className='fast-payouts'>
      <Container>
        <Container>
          <Row>
            <Col sm={12} md={6}>
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
            <Col sm={12} md={6}>
            </Col>
          </Row>
        </Container>
          {/* <img width={"100%"} src={fastpayouts} alt="fastpayouts" /> */}
      </Container>
    </div>
  )
}

export default FastPayouts