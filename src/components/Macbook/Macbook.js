import React, { Fragment } from "react";
import NavTwo from "../NavTwo/NavTwo";
import macbookpro from "../../Images/macbook.png";
import logogrey from "../../Images/logogrey.svg";
import "./Macbook.css";

const Macbook = () => {
  return (
    <Fragment>
      <NavTwo />
      <div className="macbody">
        <header className="macbook-header">
          <img className="logogrey2" src={logogrey} alt="" />
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="macbook-text">
                  <h3 className="macbook-blue wow fadeInUp" data-wow-delay=".5s">Macbook</h3>
                  <h1 className="macbook-main wow fadeInUp" data-wow-delay=".7s">
                    More power. <br />
                    More pro.
                  </h1>
                  <p className="macbook-p wow fadeInUp" data-wow-delay=".9s">
                    <div className="row">
                      <div className="col-md-6">
                        8-Core <br />
                        <span className="lite">Intel Processor</span>
                      </div>
                      <div className="col-md-6">
                        32 GB <br />
                        <span className="lite">Memory</span>
                      </div>
                    </div>
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <img className="pro wow fadeInUp" data-wow-delay="1.2s" src={macbookpro} alt="" />
              </div>
            </div>
          </div>
        </header>
      </div>
    </Fragment>
  );
};

export default Macbook;
