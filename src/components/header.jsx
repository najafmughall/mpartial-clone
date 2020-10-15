import React, { Component } from "react";
import logo from "../images/logo.png";
import video from "../images/homepage.mp4";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <div>
            <video className="videoTag" autoPlay loop muted>
              <source src={video} type="video/mp4" />
            </video>
          </div>
          <nav className="navbar navbar-expand-md">
            <div className="container">
              <a className="navbar-brand" href="#">
                <img src={logo} alt="Logo" width="217" />
              </a>

              <div className="collaspe navbar-collaspe">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <a className="nav-link " href="#">
                      Ground-Truth Data
                    </a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" href="#">
                      How It Works
                    </a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" href="#">
                      Fee Structure
                    </a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" href="#">
                      Example Devliverables
                    </a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" href="#">
                      Submission Portal
                    </a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" href="#">
                      Contact Us
                    </a>
                  </li>
                  <li className="nav-item active">
                    <button className="btn-signIn">Sign in</button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </React.Fragment>
    );
  }
}

export default Header;
