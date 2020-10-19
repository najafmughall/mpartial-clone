import React, { Component } from "react";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";

class Waterfall extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      volume: 0,
      step: 5,
      labels: {
        0: "$0",
        25: "$250,000",
        50: "$500,000",
        75: "750,000",
        100: "$1M+",
      },
    };
  }

  handleOnChange = (value) => {
    this.setState({
      volume: value,
    });
  };

  render() {
    let { volume, step, labels } = this.state;
    const format = (volume) => "$" + volume + " Estimate Grand Total";
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="section_text section_text2">
                Waterfall Fee Structure
              </h1>
            </div>
          </div>
          <div className="slider">
            <Slider
              value={volume}
              orientation="horizontal"
              onChange={this.handleOnChange}
              step={step}
              labels={labels}
              format={format}
            />
          </div>

          <p className="data-text waterfall">
            Drag the slider around based on what you think it will cost to
            repair the property.<br></br>
            Move forward based on the estimated fee structure below.
          </p>
          <div className="fee_btn">
            <label>7.50%</label>
            <span>mpartial fee</span>
          </div>
          <p className="info_text">[$750 minimum]</p>
        </div>
      </React.Fragment>
    );
  }
}
export default Waterfall;
