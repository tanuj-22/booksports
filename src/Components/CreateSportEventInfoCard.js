// import bootstrap
import { Col } from "react-bootstrap";

const CreateSportEventInfoCard = (props) => {
  let { img, title, desc, dataAos, dataAosDelay, cardOrderSM ,cardOrderMD } = props;
  return (
    <Col
      lg={{ span: 6, order: cardOrderMD }}
      md={{ span: 6, order: cardOrderMD }}
      sm={{ span: 12, order: cardOrderSM }}
      xs={{ span: 12, order: cardOrderSM }}
    >
      <div
        className="create-sport-event-card"
        data-aos={dataAos}
        data-aos-delay={dataAosDelay}
      >
        <img src={img} alt="" />
        <p className="create-sport-event-card-title">{title}</p>
        <p className="create-sport-event-card-text">{desc}</p>
      </div>
    </Col>
  );
};

export default CreateSportEventInfoCard;
