// import css
import { Container, Row } from "react-bootstrap";
import "../css/simple-design.css";

// import card
import InfoCard from "./InfoCard";

// import assets

import messaging2 from "../assests/messaging2.svg";
import community from "../assests/community.svg";
import invitations from "../assests/invitations.svg";
import multiplatform2 from "../assests/multiplatform2.svg";
import rsvp from "../assests/rsvp.svg";
import waitinglist2 from "../assests/waitinglist2.svg";

const SimpleDesign = () => {
  const cards = [
    {
      image: messaging2,

      title: "Send private messages",
      text: "Message as a host, enjoy a secure 1-1 conversation. All your communications from one dedicated platform, for free.",
    },
    {
      image: community,

      title: "Organise your community",
      text: "Join or set up your groups of friends to share events and stay in touch.",
    },
    {
      image: waitinglist2,

      title: "Waiting list",
      text: "The waiting list automatically follows dropouts and instantly fills available places with players on the waiting list.",
    },
    {
      image: invitations,
      title: "Invitations",
      text: "Invite members to practices, games or other team activities.",
    },
    {
      image: multiplatform2,
      title: "Multi-platform",
      text: "We will be available on most devices, iOS, Android and Web App.",
    },
    {
      image: rsvp,
      image2: rsvp,
      title: "RSVP",
      text: "Get invites via SMS, email and push notifications. This helps everyone to receive and respond to events.",
    },
  ];

  return (
    <div
      className="simple-design block-container-fp"
      data-aos="fade-up"
      data-aos-delay="50"
    >
      <p className="tagline-heading" data-aos="fade-up" data-aos-delay="100">
        There is more. Elevate your copy with a simple design.
      </p>
      <p className="tagline-text" data-aos="fade-up" data-aos-delay="100">
        Bring the excitement of returning to team sports and group activities.
      </p>

      {/* Info Cards */}

      <div className="info-cards ">
        <Container fluid className="container-fluid-row-col-container">
          <Row>
            {cards.map((card, index) => {
              return (
                <InfoCard
                  image={card.image}
                  title={card.title}
                  text={card.text}
                  dataAos="zoom-in"
                  dataAosDelay={0}
                />
              );
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default SimpleDesign;
