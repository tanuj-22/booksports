// import bootstrap
import { Container, Row, Col } from "react-bootstrap";

// import css
import '../css/communicate.css';

// import assets
import socialmediacircle from '../assests/socialmediacircle.svg';
import messagingside from '../assests/messagingside.svg';



const CommunicateandLead = () => {
  return (
    <div className="communicate-and-lead">
        <Container>
            <Row>
                <Col xs={12} md={6} className='communicate-left'>
                    <img src={messagingside} alt="messaging-side" className="messaging-side"/>
                </Col>
                <Col xs={12} md={6} className='communicate-right'>
                    <p className="communicate-tagline">
                        Communicate and lead all-in-one place. 
                        <br/>
                        And it is free.
                    </p>
                    <img src={socialmediacircle} alt="social-media-circle" className="social-media-circle"/>
                </Col>
            </Row>
                
        </Container>
    </div>
  )
}

export default CommunicateandLead;