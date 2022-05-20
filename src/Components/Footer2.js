import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import logo from "../assests/logo3.svg";
import twitter from "../assests/twitter2.svg";

import facebook from "../assests/facebook2.svg";
import instagram from "../assests/insta2.svg";
import globe from "../assests/globe2.svg";
import linkedin from "../assests/linkedin2.svg";
import facebook2 from "../assests/facebook3.svg";
import insta2 from "../assests/insta3.svg";
import globe2 from "../assests/globe3.svg";
import linkedin2 from "../assests/linkedin3.svg";
import twitter2 from "../assests/twitter3.svg";

import "../css/footer2.css";
const Footer2 = () => {
  return (
    <>
      <div className="footer-2-container">
        <Container className="footer-container">
          <Navbar className="navbarMain3 pt-4" bg="bg-transparent" expand="md">
            <Container fluid className="block-container-3">
              <Navbar.Brand className="navBrand3" href="/">
                <img className="img-fluid" src={logo} alt="booksports-logo" />
              </Navbar.Brand>

              <Nav className="ml-auto navItems3 ">
                <Nav.Link className="px-3 navLink3 " href="/">
                  Home
                </Nav.Link>

                <Nav.Link
                  className="px-3 navLink3"
                  style={{ fontStyle: "normal" }}
                  href="/about"
                >
                  About
                </Nav.Link>

                <Nav.Link className="px-3 navLink3 " href="#features">
                  Features
                </Nav.Link>

                <Nav.Link className="px-3 navLink3 " href="#contactus">
                  Contact us
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <hr className="footer-line" />
          <Row>
            <Col lg={6} md={6} sm={12}>
              <p className="copyright-text-2">
                Copyrights @ 2022 Booksports All Right Reserved
              </p>
            </Col>
            <Col lg={6} md={6} sm={12} className="column-right-2">
              <div className="social-media-2">
                <a href="https://www.facebook.com" class="expand-link">
                  <img
                    className="icon icon-expand"
                    src={facebook}
                    alt="facebook"
                  />
                  <img
                    className="icon icon-contract"
                    src={facebook2}
                    alt="facebook"
                  />
                </a>
                <a href="https://www.instagram.com" class="expand-link">
                  <img
                    className="icon icon-expand"
                    src={instagram}
                    alt="instagram"
                  />
                  <img
                    className="icon icon-contract"
                    src={insta2}
                    alt="instagram"
                  />
                </a>
                <a href="https://www.linkedin.com" class="expand-link">
                  <img
                    className="icon icon-expand"
                    src={linkedin}
                    alt="linkedin"
                  />
                  <img
                    className="icon icon-contract"
                    src={linkedin2}
                    alt="linkedin"
                  />
                </a>
                <a href="https://www.twitter.com" class="expand-link">
                  <img
                    className="icon icon-expand"
                    src={twitter}
                    alt="twitter"
                  />
                  <img
                    className="icon icon-contract"
                    src={twitter2}
                    alt="twitter"
                  />
                </a>
                <a href="/" class="expand-link">
                  <img className="icon icon-expand" src={globe} alt="website" />
                  <img
                    className="icon icon-contract"
                    src={globe2}
                    alt="website"
                  />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer2;
