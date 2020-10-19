import React, { Component } from "react";
import SplitterLayout from "react-splitter-layout";
import "react-splitter-layout/lib/index.css";
import pre from "../images/pre-mitigation.jpg";
import post from "../images/post-mitigation.jpg";

class Mitigation extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="image-compare">
            <SplitterLayout>
              <img src={pre} alt="pre-mitigation" className="imgStyle" />
              <img src={post} alt="post-mitigation" className="imgStyle" />
            </SplitterLayout>
          </div>
          <div className="try_btn">
            <a href="#">
              <button className="btn-signIn">Try Today</button>
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Mitigation;
