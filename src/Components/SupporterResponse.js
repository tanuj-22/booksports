// import css
import { Container, Row, Col } from "react-bootstrap";
import "../css/supporters.css";

const SupporterResponse = (props) => {
  return (
    <div
      className="supporter-response-card"
      data-aos="zoom-in"
      data-aos-delay="400"
    >
      <Container fluid>
        <Row>
          <Col xs={2}>
            <img src={props.img} alt="supporter" data-aos={props.dataAos} data-aos-delay={props.dataAosDelay}/>
          </Col>
          <Col xs={10}>
            <div className="supporter-info" data-aos={props.dataAos} data-aos-delay={props.dataAosDelay}>
              <p className="description" >{props.description}</p>
              <p className="intro">{props.intro}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SupporterResponse;
