import React, { lazy, Suspense } from "react";
import { Container, Navbar } from "react-bootstrap";

import "../css/NavbarHome.css";
import BrandLogo from "../assests/BrandLogo.png";
const NavbarBrand = lazy(() => import("./Navbar/NavbarBrandLogo"));
const NavbarLinks = lazy(() => import("./Navbar/NavbarLinks"));

const NavbarHome = ({ ...props }) => {
  return (
    <Navbar className="navbarMain" bg="bg-transparent" expand="lg" {...props}>
      <Container fluid className="navbar-container block-container-fp">
        <Navbar.Brand className="navBrand" href="/">
          <Suspense
            
            fallback={<img src={BrandLogo} className="navBrandLogoB" alt="brand-logo" style={{height:"41px"}}/>}
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
