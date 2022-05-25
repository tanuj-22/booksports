// import bootstrap
import { Col } from "react-bootstrap";

const CreateSportEventInfoCard = (props) => {
  let { img, title, desc, dataAos, dataAosDelay } = props;
  return (
    <Col lg={6} md={12}>
      <div
        className="create-sport-event-card"
        data-aos={dataAos}
        data-aos-delay={dataAosDelay}
      >
        <img src={img} alt="" />
        <p>{title}</p>
        <p>{desc}</p>
      </div>
    </Col>
  );
};

export default CreateSportEventInfoCard;
