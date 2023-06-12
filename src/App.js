import { Component } from "react";
import "./App.css";
import Form from "./components/Form";

class App extends Component {
  constructor() {
    super();

    this.state = {
      main: true,
      button: "Submit",
    };
  }

  onSubmit = () => {
    let button;
    if (this.state.button === "Submit") {
      button = "Back";
    } else {
      button = "Submit";
    }
    this.setState({
      main: !this.state.main,
      button: button,
    });
  };

  // Render page
  render() {
    if (this.state.main)
      return (
        <div>
          <Form />
          <button onClick={this.onSubmit}>{this.state.button}</button>
        </div>
      );
    return <button onClick={this.onSubmit}>{this.state.button}</button>;
  }
}

export default App;
