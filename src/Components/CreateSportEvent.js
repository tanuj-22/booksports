// import bootstrap
import { Container, Row, Col } from "react-bootstrap";
// import css
import "../css/create-sport-event.css";
// import assets
import findsocialgames from "../assests/findsocialgames.svg";
import makenewfriends from "../assests/makenewfriends.svg";
import travelandplay from "../assests/travelandplay.svg";
import anorganiser from "../assests/AnOrganiser.svg";
import basicInfoMockupMobile from "../assests/Basic-info-mb-1.webp";
import basicInfoMockupMobileCR from "../assests/basic-info-mobile-cr.webp";
import basicInfoMockupMobileCL from "../assests/basic-info-mobile-cl.webp";

// import components
import CreateSportEventInfoCard from "./CreateSportEventInfoCard";

const CreateSportEvent = () => {
  const cards = [
    {
      img: findsocialgames,
      title: "Find social games",
      desc: "Match with like-minded people in all sports today. You don’t need to message 100+ peeps to play.",
    },
    {
      img: makenewfriends,
      title: "Make new friends",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      img: travelandplay,
      title: "Travel & play",
      desc: "Keep playing while you travel, finding casual games to participate would not be an issue.",
    },
    {
      img: anorganiser,
      title: "Be an Organiser",
      desc: "Love organising sport games? Dream to turn a hobby into a business? We got your back.",
    },
  ];

  return (
    <div
      className="create-sport-event block-container-fp"
      data-aos="fade-up"
      data-aos-delay="50"
    >
      <Container fluid style={{ padding: 0 }}>
        <Row className="mobileRow">
          <Col md={12} lg={6} order-1 className="mobileRowCol">
            <div className="purpleBackgroundContainer">
              <div className="mock-img-box" style={{ position: "relative" }}>
                <img src={basicInfoMockupMobile} alt="basic info" />
                <img src={basicInfoMockupMobileCL} alt="basic info" />
                <img src={basicInfoMockupMobileCR} alt="basic info" />
              </div>
            </div>
          </Col>
        </Row>
        <div className="create-sport-event-taglines">
          <p
            className="create-sport-event-heading"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Create sport events with simple steps. Simplicity is key.
          </p>
          <p
            className="create-sport-event-info"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Organising or finding casual games shouldnt be a rocket science.
          </p>
        </div>

        <Container fluid className="container-fluid-row-col-container">
          <Row>
            <Col md={12} lg={6}>
              <div className="event-info-cards">
                <Container fluid>
                  <Row>
                    {cards.map((card, index) => {
                      return (
                        <CreateSportEventInfoCard
                          img={card.img}
                          title={card.title}
                          desc={card.desc}
                          dataAos="zoom-in"
                          dataAosDelay={150 + index * 50}
                        />
                      );
                    })}
                  </Row>
                </Container>
              </div>
            </Col>
            <Col
              md={12}
              lg={6}
              order-1
              style={{ paddingRight: 0 }}
              className="desktopCol"
            >
              {/* <div
                className="mockupImageBackgroundContainer"
                data-aos={"fade-down"}
                data-aos-delay={"150"}
              >
                <img
                  src={basicInfoMockup}
                  alt="basic info"
                  className="basicInfoMockupImage"
                />
              </div> */}
              <div className="purpleBackgroundContainer">
                <div className="mock-img-box" style={{ position: "relative" }}>
                  <img src={basicInfoMockupMobile} alt="basic info" />
                  <img src={basicInfoMockupMobileCL} alt="basic info" />
                  <img src={basicInfoMockupMobileCR} alt="basic info" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default CreateSportEvent;
