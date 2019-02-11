import React, { Component } from "react";
import "../css/Input.css";
import Validation from "../components/Validation";

class Input extends Component {
  render() {
    const lenStyle = {
      width: "33%",
      margin: "1%",
      padding: "2%",
      display: "inline",
      fontWeight: "bold"
    };

    const inpStyle = {
      width: "80%",
      margin: "3% auto",
      padding: "2%",
      justifyContent: "center",
      textAlign: "center",
      verticalAlign: "middle",
      display: "block"
    };

    return (
      <div className="Inp">
        <input
          style={inpStyle}
          type="text"
          onChange={this.props.change}
          value={this.props.val}
        />
        <div style={lenStyle}>{this.props.len}</div>
        <Validation textLength={this.props.len} />
      </div>
    );
  }
}

export default Input;
