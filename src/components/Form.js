import uniqid from "uniqid";
import { Component } from "react";
import General from "./General";
import Education from "./Education";
import EduDisplay from "./EduDisplay";
import Experience from "./Experience";
import ExpDisplay from "./ExpDisplay";

export default class Form extends Component {
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

  // General form functions

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

  // Education form functions

  onAddEducation = () => {
    if (
      this.state.education.schoolName &&
      this.state.education.studyTitle &&
      this.state.education.date
    ) {
      this.setState({
        educations: this.state.educations.concat(this.state.education),
        education: {
          id: uniqid(),
          schoolName: "",
          studyTitle: "",
          date: "",
        },
      });
    }
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

  // Work experience form functions
  onSubmitExperience = (e) => {
    e.preventDefault();
    this.setState({
      experiences: this.state.experiences.concat(this.state.experience),
      experience: {
        id: uniqid(),
        company: "",
        position: "",
        task: "",
        start: "",
        end: "",
      },
    });
  };

  handleCompanyChange = (e) => {
    this.setState({
      experience: {
        id: this.state.experience.id,
        company: e.target.value,
        position: this.state.experience.position,
        task: this.state.experience.task,
        start: this.state.experience.start,
        end: this.state.experience.end,
      },
    });
  };

  handlePositionChange = (e) => {
    this.setState({
      experience: {
        id: this.state.experience.id,
        company: this.state.experience.company,
        position: e.target.value,
        task: this.state.experience.task,
        start: this.state.experience.start,
        end: this.state.experience.end,
      },
    });
  };

  handleTaskChange = (e) => {
    this.setState({
      experience: {
        id: this.state.experience.id,
        company: this.state.experience.company,
        position: this.state.experience.position,
        task: e.target.value,
        start: this.state.experience.start,
        end: this.state.experience.end,
      },
    });
  };

  handleExpStartChange = (e) => {
    this.setState({
      experience: {
        id: this.state.experience.id,
        company: this.state.experience.company,
        position: this.state.experience.position,
        task: this.state.experience.task,
        start: e.target.value,
        end: this.state.experience.end,
      },
    });
  };

  handleExpEndChange = (e) => {
    this.setState({
      experience: {
        id: this.state.experience.id,
        company: this.state.experience.company,
        position: this.state.experience.position,
        task: this.state.experience.task,
        start: this.state.experience.start,
        end: e.target.value,
      },
    });
  };

  handleEduDisplaySchoolChange = (e) => {
    const eduID = e.target.getAttribute("data-id");
    const newState = this.state.educations.map((edu) => {
      if (edu.id === eduID) {
        return { ...edu, schoolName: e.target.value };
      }
      return edu;
    });
    this.setState({
      educations: newState,
    });
  };

  handleEduDisplayStudyChange = (e) => {
    const eduID = e.target.getAttribute("data-id");
    const newState = this.state.educations.map((edu) => {
      if (edu.id === eduID) {
        return { ...edu, studyTitle: e.target.value };
      }
      return edu;
    });
    this.setState({
      educations: newState,
    });
  };

  handleEduDisplayDateChange = (e) => {
    const eduID = e.target.getAttribute("data-id");
    const newState = this.state.educations.map((edu) => {
      if (edu.id === eduID) {
        return { ...edu, date: e.target.value };
      }
      return edu;
    });
    this.setState({
      educations: newState,
    });
  };

  // Render page
  render() {
    return (
      <div className="App">
        <p>All field must be filled for submitting CV.</p>
        <form>
          <General
            general={this.state.general}
            firstNameChange={this.handleFirstNameChange}
            lastNameChange={this.handleLastNameChange}
            emailChange={this.handleEmailChange}
          />
          <Education
            addForm={this.onAddEducation}
            education={this.state.education}
            schoolChange={this.handleSchoolChange}
            studyChange={this.handleStudyChange}
            dateChange={this.handleSchoolDateChange}
          />
          <EduDisplay
            educations={this.state.educations}
            schoolChange={this.handleEduDisplaySchoolChange}
            studyChange={this.handleEduDisplayStudyChange}
            dateChange={this.handleEduDisplayDateChange}
          />
          <Experience
            submitForm={this.onSubmitExperience}
            experience={this.state.experience}
            companyChange={this.handleCompanyChange}
            positionChange={this.handlePositionChange}
            taskChange={this.handleTaskChange}
            startChange={this.handleExpStartChange}
            endChange={this.handleExpEndChange}
          />
          <ExpDisplay experiences={this.state.experiences} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
