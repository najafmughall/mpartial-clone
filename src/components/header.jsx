import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <a href="#">
            <img src="logo.png" alt="Logo" />
          </a>
          <a href="#">Ground-Truth Data</a>
          <a href="#">How It Works</a>
          <a href="#">Fee Structure</a>
          <a href="#">Example Devliverables</a>
          <a href="#">Submission Portal</a>
          <a href="#">Contact Us</a>
          <button>Sign in</button>
        </header>
      </React.Fragment>
    );
  }
}

export default Header;
