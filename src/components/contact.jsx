import React, { Component } from "react";
import axios from "axios";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      cell: "",
      message: "",
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:3002/send",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    });
  }

  resetForm() {
    this.setState({ name: "", email: "", cell: "", message: "" });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="section_text section_text2">Contact Us</h1>
          </div>
        </div>
        <div className="form-holder">
          <form
            id="contact-form"
            onSubmit={this.handleSubmit.bind(this)}
            method="POST"
          >
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div className="form-group nogroup">
                  <label className="floating_label" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={this.state.name}
                    onChange={this.onNameChange.bind(this)}
                  />
                </div>
                <div className="form-group nogroup">
                  <label
                    className="floating_label"
                    htmlFor="exampleInputEmail1"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={this.state.email}
                    onChange={this.onEmailChange.bind(this)}
                  />
                </div>
                <div className="form-group nogroup">
                  <label
                    className="floating_label isFixed_False"
                    htmlFor="exampleInputCell"
                  >
                    Cell
                  </label>
                  <input
                    type="phone"
                    className="form-control"
                    id="cell"
                    value={this.state.email}
                    onChange={this.onEmailChange.bind(this)}
                  />
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="form-group nogroup">
                  <label className="floating_label" htmlFor="message">
                    Write your message...
                  </label>
                  <textarea
                    rows="5"
                    id="message"
                    value={this.state.message}
                    onChange={this.onMessageChange.bind(this)}
                  />
                </div>
              </div>
            </div>
            <div className="try_btn">
              <button type="submit" className="btn-signIn" disabled>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }
}

export default Contact;
