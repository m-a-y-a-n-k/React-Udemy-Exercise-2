import React, { Component } from "react";
import "../css/Input.css";

class Char extends Component {
  render() {
    return (
      <span className="letter" onClick={this.props.delete}>
        {this.props.letter}
      </span>
    );
  }
}

export default Char;
