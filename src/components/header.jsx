import React, { Component } from "react";
import logo from "../images/logo.png";
import video from "../images/homepage.mp4";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="main-header">
          <nav className="navbar navbar-expand-md">
            <div className="container">
              <a className="navbar-brand" href="#">
                <img src={logo} alt="Logo" width="217" />
              </a>
              <button type="button" className="mr-2 navbar-toggler">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collaspe navbar-collaspe">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      Ground-Truth Data
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      How It Works
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      Fee Structure
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      Example Devliverables
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      Submission Portal
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
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
        <div className="home_video_background">
          <div className="Background-video">
            <video className="videoTag" autoPlay loop muted>
              <source src={video} type="video/mp4" />
            </video>
          </div>
          <div className="main_banner_text">
            Impartial, Remote, 3rd Party, <br /> Estimating Engine
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
