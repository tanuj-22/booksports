// import css
import { Container, Row, Col } from 'react-bootstrap';
import '../css/supporters.css';

const SupporterResponse = (props) => {
  return (
    <div className='supporter-response-card'>
        <Container fluid>
            <Row>
                <Col xs={2}>
                    <img src={props.img} alt='supporter'/>
                </Col>
                <Col xs={10}>
                    <div className='supporter-info'>
                        <p className='description'>
                            {props.description}
                        </p>
                        <p className='intro'>
                            {props.intro}
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default SupporterResponse;