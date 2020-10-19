import React, { Component } from "react";

class HowItWorks extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="howitworks">
          <div className="container">
            <div className="row">
              <div className="col">
                <h1 className="section_text section_text2">How It Works</h1>
              </div>
            </div>
            <div className="data">
              <div className="row no-gutters">
                <div className="col-md-4 col-sm-12">
                  <div className="row no-gutters">
                    <div className="col-md-4 col-sm-12 data-number">1</div>
                    <div className="col-md-8 col-sm-12 data-text">
                      <a href="#">
                        Perform pre-mitigation and post-mitigation scans with a
                        Matterport Pro Series camera.
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12">
                  <div className="row no-gutters">
                    <div className="col-md-4 col-sm-12 data-number">2</div>
                    <div className="col-md-8 col-sm-12 data-text">
                      <span>
                        Submit the Matterport scans via the mpartial portal and
                        then go back to what you do great.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12">
                  <div className="row no-gutters">
                    <div className="col-md-4 col-sm-12 data-number">3</div>
                    <div className="col-md-8 col-sm-12 data-text">
                      <span>
                        Receive a well-formatted, fully documented Xactimate
                        PDF, ESX & Matterport TrueSketch PLUS SKX.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="try_btn">
              <a href="#">
                <button className="btn-signIn">Get Started</button>
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HowItWorks;
