// import bootstrap
import { Col } from "react-bootstrap";

const InfoCard = (props) => {
  let { image, title, text, dataAos, dataAosDelay } = props;
  return (
    <Col lg={4} md={6} sm={12}>
      {/* image */}
      <div
        className="info-card"
        data-aos={dataAos}
        data-aos-delay={dataAosDelay}
      >
        <img src={image} alt="" />
        <p className="info-card-title">{title}</p>
        <p className="info-card-text">{text}</p>
      </div>
    </Col>
  );
};

export default InfoCard;
