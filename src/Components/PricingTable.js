// import bootstrap
import { Table, Button } from 'react-bootstrap'
// import assets
import correct from '../assests/correct.svg';
import lightningLogo from '../assests/lightningLogo.svg';
import lightningLogoBlack from '../assests/lightninglogo-black.svg'
// import libs
import { useState } from 'react';

const PricingTable = () => {

    const [logo, setLogo] = useState(lightningLogoBlack);

    const hoverOnButton = () => {
        setLogo(lightningLogo);
    }
    const hoverOffButton = () => {
        setLogo(lightningLogoBlack);
    }

  return (
    <div className='pricing-table'>
        <Table responsive>
            <thead>
                <tr>
                    <td>Plans</td>
                    <th>Users</th>
                    <th>Pro</th>

                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Pricing</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th>Features</th>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Organise Games and Events</td>
                    <td>
                        <img src={correct} alt=""/>
                    </td>
                    <td>
                        <img src={correct} alt=""/>
                    </td>
                </tr>
                <tr>
                    <td>Create Groups and Messenger</td>
                    <td>
                        <img src={correct} alt=""/>
                    </td>
                    <td>
                        <img src={correct} alt=""/>
                    </td>
                </tr>
                <tr>
                    <td>Reserve your spots</td>
                    <td>
                        <img src={correct} alt=""/>
                    </td>
                    <td>
                        <img src={correct} alt=""/>
                    </td>
                </tr>
                <tr>
                    <td>Smart Waiting List</td>
                    <td>
                        <img src={correct} alt=""/>
                    </td>
                    <td>
                        <img src={correct} alt=""/>
                    </td>
                </tr>
                <tr>
                    <td>Split booking fees evenly</td>
                    <td>-</td>
                    <td>
                        <img src={correct} alt=""/>
                    </td>
                </tr>
                <tr>
                    <td>Advanced Organiser settings</td>
                    <td>-</td>
                    <td>
                        <img src={correct} alt=""/>
                    </td>
                </tr>
                <tr>
                    <td>Receive online payments</td>
                    <td>-</td>
                    <td>
                        <img src={correct} alt=""/>
                    </td>
                </tr>
                <tr>
                    <td>Choose Refund deadline</td>
                    <td>-</td>
                    <td>
                        <img src={correct} alt=""/>
                    </td>
                </tr>
                <tr>
                    <td>
                        Recurring events / games
                    </td>
                    <td>
                        -
                    </td>
                    <td>
                        <img src={correct} alt=""/>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <Button onMouseOver={hoverOnButton} onMouseOut={hoverOffButton} className="join-button-pricing-outline" id="join-waitlist-btn" variant="outline-dark">
                            <span className="join-btn-text">Join Waitlist</span>
                            <img
                                src={logo}
                                alt="lightning-logo"
                                className="lightningLogo"
                            />
                        </Button>
                    </td>
                    <td>
                        <Button className="join-button-pricing" id="join-waitlist-btn" variant="dark">
                            <span className="join-btn-text">Join Waitlist</span>
                            <img
                                src={lightningLogo}
                                alt="lightning-logo"
                                className="lightningLogo"
                            />
                        </Button>
                    </td>
                </tr>
            </tbody>
        </Table>
    </div>
  )
}

export default PricingTable