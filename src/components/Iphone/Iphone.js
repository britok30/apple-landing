import React, { Fragment } from "react";
import NavTwo from "../NavTwo/NavTwo";
import "./Iphone.css";
import iphonexs from "../../Images/Iphone 1.png";
import logogrey from "../../Images/logogrey.svg";

// import

const Iphone = () => {
  return (
    <Fragment>
      <NavTwo />
      <div className="iphonebody">
        <header className="iphone-header">
          <img className="logogrey2" src={logogrey} alt="" />
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="iphone-text">
                  <h3 className="iphone-red wow fadeInUp" data-wow-delay=".5s">iPhone</h3>
                  <h1 className="iphone-main wow fadeInUp" data-wow-delay=".7s">
                    The ultimate <br />
                    iPhone
                  </h1>
                  <p className="iphone-p wow fadeInUp" data-wow-delay=".9s">
                    The future is here. Join the iPhone Upgrade <br />
                    Program to get the latest iPhone - NOW!
                  </p>
                </div>
                <div className="iphone-price">
                  <h3 className="price wow fadeInUp" data-wow-delay="1s">From $699</h3>
                  <p className="buy-red wow fadeInUp" data-wow-delay="1s">Buy Now ></p>
                </div>
                <div className="frontback">
                  <img src="" alt="" />
                  <img src="" alt="" />
                </div>
              </div>
              <div className="col-md-6">
                <img className="iphonexs wow fadeInUp" data-wow-delay="1.5s" src={iphonexs} alt="" />
              </div>
            </div>
          </div>
        </header>
      </div>
    </Fragment>
  );
};

export default Iphone;
