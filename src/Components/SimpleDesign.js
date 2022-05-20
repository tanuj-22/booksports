// import css
import { Container, Row } from 'react-bootstrap'
import '../css/simple-design.css'

// import card
import InfoCard from './InfoCard'

// import assets
import messaging from '../assests/messaging.svg'
import community from '../assests/community.svg'
import invitations from '../assests/invitations.svg'
import multiplatform from '../assests/messaging.svg'
import rsvp from '../assests/rsvp.svg'
import waitinglist from '../assests/waitinglist.svg'



const SimpleDesign = () => {

    const cards = [
        {   image:messaging, 
            title:"Send private messages",
            text:"Message as a host, enjoy a secure 1-1 conversation. All your communications from one dedicated platform, for free."
        }, 
        {   image:community, 
            title:"Send private messages",
            text:"Message as a host, enjoy a secure 1-1 conversation. All your communications from one dedicated platform, for free."
        }, 
        {   image:waitinglist, 
            title:"Send private messages",
            text:"Message as a host, enjoy a secure 1-1 conversation. All your communications from one dedicated platform, for free."
        }, 
        {   image:invitations, 
            title:"Send private messages",
            text:"Message as a host, enjoy a secure 1-1 conversation. All your communications from one dedicated platform, for free."
        }, 
        {   image:multiplatform, 
            title:"Send private messages",
            text:"Message as a host, enjoy a secure 1-1 conversation. All your communications from one dedicated platform, for free."
        }, 
        {   image:rsvp, 
            title:"Send private messages",
            text:"Message as a host, enjoy a secure 1-1 conversation. All your communications from one dedicated platform, for free."
        },
    ]

  return (
    <div className='simple-design'>
        <p className='tagline-heading'>
            There is more. Elevate your copy with a simple design.
        </p>
        <p className='tagline-text'>
            Bring the excitement of returning to team sports and group activities.
        </p>

        {/* Info Cards */}

        <div className='info-cards'>
            <Container>
                <Row>
                    {
                        cards.map((card) => {
                            return (
                                <InfoCard 
                                    image={card.image}
                                    title={card.title}
                                    text={card.text}
                                />
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    </div>
  )
}

export default SimpleDesign