import { Component } from "react";
import "./App.css";
import General from "./components/General";
import Education from "./components/Education";

class App extends Component {
  constructor() {
    super();

    this.state = {
      general: { firstName: "", lastName: "", email: "" },
      education: { schoolName: "", studyTitle: "", date: "" },
      educations: [],
      experience: { company: "", position: "", task: "", start: "", end: "" },
      experiences: [],
    };
  }

  onSubmitGeneral = (e) => {
    e.preventDefault();
    console.log(this.state.general);
  };

  onsSubmitEducation = (e) => {
    e.preventDefault();
    this.setState({
      educations: this.state.educations.concat(this.state.education),
      education: { schoolName: "", studyTitle: "", date: "" },
    });
  };

  handleFirstNameChange = (e) => {
    this.setState({
      general: {
        firstName: e.target.value,
        lastName: this.state.general.lastName,
        email: this.state.general.email,
      },
    });
  };

  handleLastNameChange = (e) => {
    this.setState({
      general: {
        firstName: this.state.general.firstName,
        lastName: e.target.value,
        email: this.state.general.email,
      },
    });
  };

  handleEmailChange = (e) => {
    this.setState({
      general: {
        firstName: this.state.general.firstName,
        lastName: this.state.general.lastName,
        email: e.target.value,
      },
    });
  };

  render() {
    return (
      <div className="App">
        <General
          submitForm={this.onSubmitGeneral}
          general={this.state.general}
          firstNameChange={this.handleFirstNameChange}
          lastNameChange={this.handleLastNameChange}
          emailChange={this.handleEmailChange}
        />
        <Education
          submitForm={this.onsSubmitEducation}
          education={this.state.education}
        />
      </div>
    );
  }
}

export default App;
