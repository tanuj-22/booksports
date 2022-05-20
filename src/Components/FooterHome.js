// import css
import '../css/FooterHome.css'

// import bootstrap
import { Container, Row, Col } from 'react-bootstrap';

// import assets
import whitecompanylogo from '../assests/booksportslogowhite.svg'
import twitter from '../assests/twitter.svg'
import facebook from '../assests/facebook.svg'
import instagram from '../assests/instagram.svg'

const FooterHome = () => {
    return (
        <div className='footer-home'>
            <Container>
                <Row className='footer-row'>
                    <Col lg={6} md={12}>
                        <div className='booksportslogo'>
                            <img src={whitecompanylogo} alt='booksports' />
                        </div>
                    </Col>
                    <Col lg={6} md={12} className='column-right'>
                        Privacy Policy
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col lg={{span:6,order:1}} md={{span:12, order:2}} sm={{span:12, order:2}}>
                        <p className='copyright-text'>
                            © 2022 Booksports
                            <br/>
                            ABN: 33652085133
                            <br/>
                            ACN: 652 085 133
                        </p>
                    </Col>
                    <Col lg={{span:6, order:2}} md={{span:12, order:1}} sm={{span:12, order:1}} className='column-right'>
                        <div className='social-media'>
                            <img src={twitter} alt='twitter' />
                            <img src={facebook} alt='facebook' />
                            <img src={instagram} alt='instagram' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default FooterHome;