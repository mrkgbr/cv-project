import { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super();

    this.state = {
      main: true,
      button: "Submit",
      general: { firstName: "", lastName: "", email: "" },
      education: { id: uniqid(), schoolName: "", studyTitle: "", date: "" },
      educations: [],
      experience: {
        id: uniqid(),
        company: "",
        position: "",
        task: "",
        start: "",
        end: "",
      },
      experiences: [],
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
    return (
      <div>
        {/* <Form /> */}
        <button onClick={this.onSubmit}>{this.state.button}</button>
      </div>
    );
  }
}

export default App;
