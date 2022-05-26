import React, { lazy, Suspense } from "react";
import { Container, Navbar } from "react-bootstrap";

import "../css/NavbarHome.css";
import BrandLogo from "../assests/BrandLogo.png";
const NavbarBrand = lazy(() => import("./Navbar/NavbarBrandLogo"));
const NavbarLinks = lazy(() => import("./Navbar/NavbarLinks"));

const NavbarHome = ({ ...props }) => {
  return (
    <Navbar className="navbarMain" bg="bg-transparent" expand="lg" {...props}>
      <Container className="block-container">
        <Navbar.Brand className="navBrand" href="/">
          <Suspense
            // fallback={<h1 style={{ fontSize: "2.25rem" }}>booksports</h1>}
            fallback={<img src={BrandLogo} alt="brand-logo" style={{height:"41px"}}/>}
          >
            <NavbarBrand />
          </Suspense>
        </Navbar.Brand>
        <Suspense fallback={<></>}>
          <NavbarLinks />
        </Suspense>
      </Container>
    </Navbar>
  );
};

export default NavbarHome;
