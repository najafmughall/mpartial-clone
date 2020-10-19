import React, { Component } from "react";
import img from "../images/img.jpg";
import sktech1 from "../images/sketch-1.png";
import sktech2 from "../images/sketch-2.png";

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
            <br></br>
            <div className="doc-slider">
              <h3 className="widget-title">Immaculate. Impartial. [ESX]</h3>
              <div className="carosuel slide">
                <ol class="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="2"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    class="active"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="2"
                  ></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img class="d-block w-100" src={img} alt="First slide" />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src={img}
                      alt="Second slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src={img}
                      alt="Third slide"
                    />
                  </div>
                  <div className="carousel-item active">
                    <img class="d-block w-100" src={img} alt="First slide" />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src={img}
                      alt="Second slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src={img}
                      alt="Third slide"
                    />
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
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
