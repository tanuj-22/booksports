import React from "react";
import logo from "../../assests/logo.svg";

const NavbarBrand = () => {
  return (
    <>
      <img
        className="img-fluid"
        src={logo}
        alt="booksports-logo"
        style={{ height: "41px" }}
      />
    </>
  );
};

export default NavbarBrand;
