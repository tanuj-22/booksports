// import bootstrap
import {Col} from 'react-bootstrap'


const InfoCard = (props) => {
  return (
    <Col lg={4} md={6} sm={12}>
        {/* image */}
        <div className='info-card'>
            <img src={props.image} alt=""/>
            <p className='info-card-title'>
                {props.title}
            </p>
            <p className='info-card-text'>
                {props.text}
            </p>
        </div>
    </Col>
  )
}

export default InfoCard