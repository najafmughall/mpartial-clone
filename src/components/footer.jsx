import React, { Component } from "react";
import facebook from "../images/facebook.svg";
import insta from "../images/insta.svg";
import linkedin from "../images/linkedin.svg";

class Footer extends Component {
  state = {};
  render() {
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
                  <ul>
                    <li>
                      <a href="">
                        <img
                          width="auto"
                          height="16px"
                          src={facebook}
                          alt="Facebook"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <img
                          height="16px"
                          width="auto"
                          src={insta}
                          alt="Facebook"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <img
                          width="auto"
                          height="16px"
                          src={linkedin}
                          alt="Facebook"
                        />
                      </a>
                    </li>
                  </ul>
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
