import { Component } from "react";
import "./App.css";
import General from "./components/General";
import Education from "./components/Education";
import EduDisplay from "./components/EduDisplay";
import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super();

    this.state = {
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

  onSubmitGeneral = (e) => {
    e.preventDefault();
  };

  onsSubmitEducation = (e) => {
    e.preventDefault();
    this.setState({
      educations: this.state.educations.concat(this.state.education),
      education: { id: uniqid(), schoolName: "", studyTitle: "", date: "" },
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

  handleSchoolChange = (e) => {
    this.setState({
      education: {
        id: this.state.education.id,
        schoolName: e.target.value,
        studyTitle: this.state.education.studyTitle,
        date: this.state.education.date,
      },
    });
  };

  handleStudyChange = (e) => {
    this.setState({
      education: {
        id: this.state.education.id,
        schoolName: this.state.education.schoolName,
        studyTitle: e.target.value,
        date: this.state.education.date,
      },
    });
  };

  handleSchoolDateChange = (e) => {
    this.setState({
      education: {
        id: this.state.education.id,
        schoolName: this.state.education.schoolName,
        studyTitle: this.state.education.studyTitle,
        date: e.target.value,
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
          schoolChange={this.handleSchoolChange}
          studyChange={this.handleStudyChange}
          dateChange={this.handleSchoolDateChange}
        />
        <EduDisplay educations={this.state.educations} />
      </div>
    );
  }
}

export default App;
