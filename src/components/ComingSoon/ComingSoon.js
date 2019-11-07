import React, { Fragment } from "react";
import logo from "../../Images/logo.png";
import "./ComingSoon.css";
import { Link } from "@reach/router";
import NavOne from "../NavOne/NavOne"

const ComingSoon = () => {
  return (
    <Fragment>
      <NavOne />
      <div className="csbody">
        <Link to="/main">
          <img className="logo1 wow fadeInUp" data-wow-delay=".5s" src={logo} alt="" />
        </Link>
        <div className="intro-text">
          <p className="intro-p wow fadeInUp" data-wow-delay=".9s">New Products Coming This Summer</p>
          <h3 className="year wow fadeInUp" data-wow-delay="1.1s">2019</h3>
        </div>
      </div>
    </Fragment>
  );
};

export default ComingSoon;
