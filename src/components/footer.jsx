import React, { Component } from "react";
import facebook from "../images/facebook.svg";
import insta from "../images/insta.svg";
import linkedin from "../images/linkedin.svg";

class Footer extends Component {
  render() {
    const social = [facebook, insta, linkedin];
    const items = social.map((s, index) => (
      <li key={index}>
        <a href="#">
          <img src={s} width="auto" height="16px" alt="Social-link" />
        </a>
      </li>
    ));
    return (
      <React.Fragment>
        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <p>
                  mpartial, a 4D Schematics Company. Copyright 2020 all rights
                  reserved.
                </p>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="social-links">
                  <ul>{items}</ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
