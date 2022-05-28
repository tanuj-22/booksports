import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import NavbarToggler from "../../assests/NavbarToggler.svg";

const NavbarLinks = () => {
  return (
    <>
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
    </>
  );
};

export default NavbarLinks;
