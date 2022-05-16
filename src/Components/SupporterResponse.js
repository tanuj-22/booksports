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
                    <p className='description px-1'>
                        {props.description}
                    </p>
                    <p className='intro'>
                        {props.intro}
                    </p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default SupporterResponse;