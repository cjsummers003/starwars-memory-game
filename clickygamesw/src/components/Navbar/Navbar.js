//sets up the reusable Navbar component
import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
         <ul>
          <li className="itemLeft"><strong>Star Wars Memory Game</strong></li>
          <li className="itemCenter"><strong>Choose Your Destiny!</strong></li>
          <li className="itemRight">Score: {this.props.score}</li>
        </ul>
        <strong><h5>Click on any image to earn a point, but don't click on the same picture more than once.  
          To win you must click all 12 characters cards.</h5></strong>
      </nav>
    );
  }
}

export default Navbar;