import React, { Component } from "react";
import "../css/Input.css";

class Validation extends Component {
  render() {
    let message = "Text long enough";
    if (this.props.textLength < 5) {
      message = "Text too short";
    }
    return <span className="InpValid">{message}</span>;
  }
}

export default Validation;
