import React from "react";
import { Navbar } from "react-bootstrap";
import logo from "../../Images/logo.png";
import "./NavOne.css"

const NavOne = () => {
  return (
    <Navbar className="navone" style={{backgroundColor: "#000"}} expand="lg">
      <Navbar.Brand className="brand" href="#home">
        <img className="logo" src={logo} alt="" />
      </Navbar.Brand>
    </Navbar>
  );
};

export default NavOne;
