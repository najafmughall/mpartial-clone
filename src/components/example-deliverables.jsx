import React, { Component } from "react";

class ExampleDeliverables extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="title-center">
          <div className="container">
            <div className="row">
              <div className="col">
                <h1 className="section_text section_text2">
                  Example Devliberables
                </h1>
              </div>
            </div>
            <h3 className="widget-title sub mt-1">
              Pre-Mitigation Scan + Post-Mitigation Scan = ESX & SKX (TrueSketch
              PLUS)
            </h3>
            <div className="widget">
              <div className="widget-content">
                <iframe
                  width="100%"
                  height="480"
                  allowfullscreen
                  allow="vr "
                  src="https://my.matterport.com/show/?m=e5Wxtu8Arbx"
                  frameborder="0"
                ></iframe>
              </div>

              <div className="widget-content">
                <iframe
                  width="100%"
                  height="480"
                  allowfullscreen
                  allow="vr "
                  src="https://my.matterport.com/show/?m=DhqzGgT7M1E"
                  frameborder="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ExampleDeliverables;
