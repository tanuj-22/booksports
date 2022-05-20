import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assests/logo2.svg";
import NavbarToggler from "../assests/NavbarToggler2.svg";

import "../css/Navbar2.css";

const Navbar2 = () => {
  
    return (
      <>
        <Navbar
          className="navbarMain2 pt-4 ms-3"
          bg="bg-transparent"
          expand="lg"
        >
          <Container fluid className="block-container-2">
            <Navbar.Brand className="navBrand2" href="/">
              <img className="img-fluid" src={logo} alt="booksports-logo" />
            </Navbar.Brand>
            <Navbar.Toggle
              className="nav-toggle-2"
              aria-controls="basic-navbar-nav"
            >
              <img src={NavbarToggler} alt="navbar-toggler" />
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav-2">
              <Nav className="ml-auto navItems2 ">
                <Nav.Link className="px-4 navLink2 " href="/">
                  Home
                </Nav.Link>
                <Nav.Link className="px-0 navLink2 disabled backslashView">
                  /
                </Nav.Link>
                {window.location.pathname === "/about" ? (
                  <>
                    <Nav.Link
                      className="px-4 navLink2 text-white active"
                      style={{ fontStyle: "normal" }}
                      href="/about"
                    >
                      About
                    </Nav.Link>
                  </>
                ) : (
                  <Nav.Link
                    className="px-4 navLink2 active"
                    href="/about"
                  >
                    About
                  </Nav.Link>
                )}

                <Nav.Link className="px-0 navLink2 disabled backslashView">
                  /
                </Nav.Link>

                {window.location.pathname === "/terms" ? (
                  <>
                    <Nav.Link
                      className="px-4 navLink2 text-white active"
                      style={{ fontStyle: "normal" }}
                      href="/terms"
                    >
                      Terms
                    </Nav.Link>
                  </>
                ) : (
                  <Nav.Link
                    className="px-4 navLink2 active"
                    href="/terms"
                  >
                    Terms
                  </Nav.Link>
                )}

                <Nav.Link className="px-0 navLink2 disabled backslashView">
                  /
                </Nav.Link>
                <Nav.Link className="px-4 navLink2 " href="#contactus">
                  Contact us
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
};

export default Navbar2;
