import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assests/logo.svg";
import NavbarToggler from "../assests/NavbarToggler.svg";
import "../css/NavbarHome.css";
const NavbarHome = () => {
  return (
    <Navbar className="navbarMain" bg="bg-transparent" expand="lg">
      <Container className="block-container">
        <Navbar.Brand className="navBrand" href="/">
          <img className="img-fluid" src={logo} alt="booksports-logo" />
        </Navbar.Brand>
        <Navbar.Toggle className="nav-toggle" aria-controls="basic-navbar-nav">
          <img src={NavbarToggler} alt="navbar-toggler" />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto navItems ">
            <Nav.Link className="px-4 navLink" href="#community">
              Community
            </Nav.Link>
            <Nav.Link className="px-4 navLink" href="/about">
              About
            </Nav.Link>
            <Nav.Link className="px-4 navLink" href="#feedback">
              Feedback
            </Nav.Link>
            <Nav.Link className="px-4 navLink" href="#pricing">
              Pricing
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarHome;
