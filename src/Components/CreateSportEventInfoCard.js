// import bootstrap 
import {Col} from 'react-bootstrap'


const CreateSportEventInfoCard = (props) => {
  return (

        <Col lg={6} md={12}>
            <div className='create-sport-event-card'>
                <img src={props.img} alt=""/>
                <p>
                    {props.title}
                </p>
                <p>
                    {props.desc}
                </p>
            </div>
        </Col>
  )
}

export default CreateSportEventInfoCard