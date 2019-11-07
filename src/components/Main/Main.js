import React, { Fragment } from "react";
import NavTwo from "../NavTwo/NavTwo";
import logogrey from "../../Images/logogrey.svg";
import Icon from "../Icon/Icon";
import { Link } from "@reach/router";
import "./Main.css";

const Main = () => {
  return (
    <Fragment>
      <NavTwo />
      <div className="mainbody">
        <div className="container">
          <img className="logogrey" src={logogrey} alt="logo" />
          <div className="main-text">
            <p className="welcome wow fadeInUp" data-wow-delay=".7s">Welcome to Apple</p>
            <Link to="/home"className="product-link">
              <p className="wow fadeInUp" data-wow-delay=".8s">See our new products</p>
            </Link>
          </div>
          <Icon />
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
