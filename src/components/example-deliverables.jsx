import React, { Component, useState } from "react";
import img from "../images/img.jpg";
import sktech1 from "../images/sketch-1.png";
import sktech2 from "../images/sketch-2.png";
import Carousel from "react-bootstrap/Carousel";

class ExampleDeliverables extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="title-center">
          <div className="container">
            <div className="row">
              <div className="col">
                <h1 className="section_text2">Example Devliberables</h1>
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
                  allowFullScreen
                  src="https://my.matterport.com/show/?m=e5Wxtu8Arbx"
                  frameBorder="0"
                ></iframe>
              </div>

              <div className="widget-content">
                <iframe
                  width="100%"
                  height="480"
                  allowFullScreen
                  src="https://my.matterport.com/show/?m=DhqzGgT7M1E"
                  frameBorder="0"
                ></iframe>
              </div>
            </div>
            <br></br>
            <div className="doc-slider">
              <h3 className="widget-title">Immaculate. Impartial. [ESX]</h3>
              <Carousel className="slide">
                <Carousel.Item>
                  <img className="d-block w-100" src={img} alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={img} alt="Third slide" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={img} alt="Third slide" />
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="sketch-widget">
              <h3 className="widget-title">TrueSketch PLUS [SKX]</h3>
              <section className="sketch-container">
                <img src={sktech1} alt="Sketch1" />
                <img src={sktech2} alt="Sketch2" />
              </section>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ExampleDeliverables;
