// import css
import '../css/become-member.css';

// import bootstrap
import { Button } from 'react-bootstrap';

// import assets
import lightningLogo from '../assests/lightningLogo.svg';
import designofeclipse from '../assests/designofeclipsses.svg';

const BecomeMember = () => {
    return (
        <div className='become-member'>
            <p className='heading'>
                Be first to become our member
            </p>
            <p className='info'>
                We value all our members and supporters, 
                join our waiting list below to become our first users.
            </p>
            <div className='center-btn'>
                <Button className="JoinButton" id="join-waitlist-btn" variant="primary">
                    <span className="join-btn-text">Join Waitlist</span>
                    <img
                        src={lightningLogo}
                        alt="lightning-logo"
                        className="lightningLogo"
                    />
                </Button>
            </div>
            <div className='design-of-eclipse'>
                <img src={designofeclipse} alt="design-of-eclipse" />
            </div>
        </div>
    )
}

export default BecomeMember;