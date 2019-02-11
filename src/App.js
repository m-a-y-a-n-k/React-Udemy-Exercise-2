import React, { Component } from "react";
import "./css/App.css";
import Input from "./components/Input";
import Char from "./components/Char";

class App extends Component {
  state = {
    text: ""
  };

  handleChange = event => {
    let text = event.target.value;
    this.setState({ text });
  };

  deleteChar = index => {
    let text = [...this.state.text];
    text.splice(index, 1);
    text = text.join("");
    this.setState({ text });
  };

  render() {
    let letters = null;

    if (this.state.text.length > 0) {
      let text = [...this.state.text];
      letters = text.map((char, index) => {
        return (
          <Char
            key={index}
            letter={char}
            delete={() => {
              this.deleteChar(index);
            }}
          />
        );
      });
    }

    const charStyles = {
      display: "inline-block",
      padding: "16px",
      textAlign: "center",
      margin: "16px",
      justifyContent: "center",
      verticalAlign: "middle",
      border: "1px solid black"
    };

    return (
      <div className="App">
        <Input
          change={event => {
            this.handleChange(event);
          }}
          len={this.state.text.length}
          val={this.state.text}
        />
        <div style={charStyles}>{letters}</div>
      </div>
    );
  }
}

export default App;
