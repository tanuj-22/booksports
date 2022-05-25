// import bootstrap
import { Container, Row, Col} from "react-bootstrap"
// import css
import '../css/create-sport-event.css'
// import assets
import findsocialgames from '../assests/findsocialgames.svg'
import makenewfriends from '../assests/makenewfriends.svg'
import travelandplay from '../assests/travelandplay.svg'
import anorganiser from '../assests/AnOrganiser.svg'
import createsportevent from '../assests/create-sport-event.png';
// import components
import CreateSportEventInfoCard from "./CreateSportEventInfoCard"



const CreateSportEvent = () => {

    const cards = [
        {
            img:findsocialgames,
            title:'Find social games',
            desc:'Match with like-minded people in all sports today. You don’t need to message 100+ peeps to play.'
        },
        {
            img:makenewfriends,
            title:'Make new friends',
            desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            img:travelandplay,
            title:'Travel & play',
            desc:'Keep playing while you travel, finding casual games to participate would not be an issue.'
        },
        {
            img:anorganiser,
            title:'Be an Organiser',
            desc:'Love organising sport games? Dream to turn a hobby into a business? We got your back.'
        }
    ]

  return (
    <div className="create-sport-event">
        <Container>
            <div className="create-sport-event-taglines">
                <p className="create-sport-event-heading">
                    Create sport events with simple steps. Simplicity is key.
                </p>
                <p className="create-sport-event-info">
                    Organising or finding casual games shouldnt be a rocket science.
                </p>
            </div>

            <Container fluid>
                <Row>
                    <Col md={12} lg={6}>
                        <div className="event-info-cards">
                            <Container fluid>
                                <Row>
                                    {
                                        cards.map((card) => {
                                            return (
                                                <CreateSportEventInfoCard
                                                    img={card.img}
                                                    title={card.title}
                                                    desc={card.desc}
                                                />
                                            )
                                        })
                                    }
                                </Row>
                            </Container>
                        </div>
                    </Col>
                    <Col md={12} lg={6}>
                        <div className="create-sport-event-image">
                            <img src={createsportevent}  alt=""/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    </div>
  )
}

export default CreateSportEvent