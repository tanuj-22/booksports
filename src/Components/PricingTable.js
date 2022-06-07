// import bootstrap
import { Table, Button } from "react-bootstrap";
// import assets
import correct from "../assests/correct.svg";
import lightningLogo from "../assests/lightningLogo.svg";
import lightningLogoBlack from "../assests/lightninglogo-black.svg";
// import libs
import { useState } from "react";

const PricingTable = () => {
  const [logo1, setLogo1] = useState(lightningLogoBlack);
  const [logo2, setLogo2] = useState(lightningLogoBlack);

  const hoverOnButton = () => {
    setLogo1(lightningLogo);
  };
  const hoverOnButton2 = () => {
    setLogo2(lightningLogo);
  };
  const hoverOffButton = () => {
    setLogo1(lightningLogoBlack);
  };
  const hoverOffButton2 = () => {
    setLogo2(lightningLogoBlack);
  };

  return (
    <div className="pricing-table" data-aos="fade-up" data-aos-delay="200">
      <div className="table-parent">
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
              <td width={"35%"}>
                <div className="pricing-in-td">
                  <p className="price-per-month">$0/mo</p>
                  <p className="info-line-td">
                    Great for everyone who loves to play sports.
                  </p>
                  <Button
                    onMouseOver={hoverOnButton}
                    onMouseOut={hoverOffButton}
                    className="join-button-pricing-outline"
                    id="join-waitlist-btn"
                    variant="outline-dark"
                    onClick={() => {
                      window.open(
                        "https://airtable.com/shr34G4Am3wHWmyJq",
                        "_blank"
                      );
                    }}
                  >
                    <span className="join-btn-text">Join Waitlist</span>
                    <img
                      src={logo1}
                      alt="lightning-logo"
                      className="lightningLogo"
                    />
                  </Button>
                </div>
              </td>
              <td width={"35%"}>
                <div className="pricing-in-td">
                  <p className="price-per-month">$19/mo</p>
                  <p className="info-line-td">
                    Great for everyone who loves to organise sport games and
                    events.
                  </p>
                  <Button
                    className="join-button-pricing"
                    id="join-waitlist-btn"
                    variant="dark"
                    onClick={() => {
                      window.open(
                        "https://airtable.com/shr34G4Am3wHWmyJq",
                        "_blank"
                      );
                    }}
                  >
                    <span className="join-btn-text">Join Waitlist</span>
                    <img
                      src={lightningLogo}
                      alt="lightning-logo"
                      className="lightningLogo"
                    />
                  </Button>
                </div>
              </td>
            </tr>
            <tr>
              <th>Features</th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Organise Games and Events</td>
              <td>
                <img src={correct} alt="" />
              </td>
              <td>
                <img src={correct} alt="" />
              </td>
            </tr>
            <tr>
              <td>Create Groups and Messenger</td>
              <td>
                <img src={correct} alt="" />
              </td>
              <td>
                <img src={correct} alt="" />
              </td>
            </tr>
            <tr>
              <td>Reserve your spots</td>
              <td>
                <img src={correct} alt="" />
              </td>
              <td>
                <img src={correct} alt="" />
              </td>
            </tr>
            <tr>
              <td>Smart Waiting List</td>
              <td>
                <img src={correct} alt="" />
              </td>
              <td>
                <img src={correct} alt="" />
              </td>
            </tr>
            <tr>
              <td>Split booking fees evenly</td>
              <td>-</td>
              <td>
                <img src={correct} alt="" />
              </td>
            </tr>
            <tr>
              <td>Advanced Organiser settings</td>
              <td>-</td>
              <td>
                <img src={correct} alt="" />
              </td>
            </tr>
            <tr>
              <td>Receive online payments</td>
              <td>-</td>
              <td>
                <img src={correct} alt="" />
              </td>
            </tr>
            <tr>
              <td>Choose Refund deadline</td>
              <td>-</td>
              <td>
                <img src={correct} alt="" />
              </td>
            </tr>
            <tr>
              <td>Recurring events / games</td>
              <td>-</td>
              <td>
                <img src={correct} alt="" />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <Button
                  onMouseOver={hoverOnButton2}
                  onMouseOut={hoverOffButton2}
                  className="join-button-pricing-outline"
                  id="join-waitlist-btn"
                  variant="outline-dark"
                  onClick={() => {
                    window.open(
                      "https://airtable.com/shr34G4Am3wHWmyJq",
                      "_blank"
                    );
                  }}
                >
                  <span className="join-btn-text">Join Waitlist</span>
                  <img
                    src={logo2}
                    alt="lightning-logo"
                    className="lightningLogo"
                  />
                </Button>
              </td>
              <td>
                <Button
                  className="join-button-pricing"
                  id="join-waitlist-btn"
                  variant="dark"
                  onClick={() => {
                    window.open(
                      "https://airtable.com/shr34G4Am3wHWmyJq",
                      "_blank"
                    );
                  }}
                >
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
      <div className="pricing-alternate">
        <div className="user-pricing">
          <p className="">
            <span className="pricing-alternate-heading">User</span>
            <br />
            <span className="pricing-alternate-price">$0/mo</span>
          </p>
          <hr />
          <p className="pricing-feature">
            <img src={correct} alt="" />
            &nbsp; &nbsp; &nbsp; &nbsp; Organise Games & Events
          </p>

          <p className="pricing-feature off-feature">
            <img src={correct} alt="" />
            &nbsp; &nbsp; &nbsp; &nbsp; Create Groups & Messenger
          </p>

          <p className="pricing-feature off-feature">
            <img src={correct} alt="" />
            &nbsp; &nbsp; &nbsp; &nbsp; Reserve your spots
          </p>
          <Button
            onMouseOver={hoverOnButton}
            onMouseOut={hoverOffButton}
            className="join-button-pricing-outline"
            id="join-waitlist-btn"
            variant="outline-dark"
            onClick={() => {
              window.open("https://airtable.com/shr34G4Am3wHWmyJq", "_blank");
            }}
          >
            <span className="join-btn-text">Join Waitlist</span>
            <img src={logo1} alt="lightning-logo" className="lightningLogo" />
          </Button>
        </div>
        <div className="pro-pricing">
          <p className="">
            <span className="pricing-alternate-heading">Pro</span>
            <br />
            <span className="pricing-alternate-price">$19/mo</span>
          </p>
          <hr />
          <p className="pricing-feature">
            <img src={correct} alt="" />
            &nbsp; &nbsp; &nbsp; &nbsp; Split booking fees evenly
          </p>

          <p className="pricing-feature">
            <img src={correct} alt="" />
            &nbsp; &nbsp; &nbsp; &nbsp; Advanced Organiser settings
          </p>

          <p className="pricing-feature off-feature">
            <img src={correct} alt="" />
            &nbsp; &nbsp; &nbsp; &nbsp; Organise Games and Events
          </p>
          <Button
            className="join-button-pricing"
            id="join-waitlist-btn"
            variant="dark"
            onClick={() => {
              window.open("https://airtable.com/shr34G4Am3wHWmyJq", "_blank");
            }}
          >
            <span className="join-btn-text">Join Waitlist</span>
            <img
              src={lightningLogo}
              alt="lightning-logo"
              className="lightningLogo"
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
