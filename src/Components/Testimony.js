// import assets
import testimony from '../assests/testimony.svg'
import testimonymob from '../assests/testimonymob.svg'
// import css
import '../css/testimony.css';

const Testimony = () => {
  return (
    <div className='testimony'>
        <div className="testimony-desktop">
            <img src={testimony} alt="testimony" />
        </div>
        <div className='testimony-mob'>
            <img src={testimonymob} alt=""/>
        </div>
    </div>
  )
}

export default Testimony