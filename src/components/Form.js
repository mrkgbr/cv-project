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

  // Work experience form functions
  onAddExperience = () => {
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

  // Form input change handling
  handleInputChange = (e) => {
    const group = e.target.getAttribute("data-group");
    const name = e.target.getAttribute("data-name");
    this.setState({
      [group]: {
        ...this.state[group],
        [name]: e.target.value,
      },
    });
  };

  // Display input change handling
  handleDisplayedListChange = (e) => {
    const id = e.target.getAttribute("data-id");
    const group = e.target.getAttribute("data-group");
    const name = e.target.getAttribute("data-name");
    const newState = this.state[group].map((obj) => {
      if (obj.id === id) {
        return { ...obj, [name]: e.target.value };
      }
      return obj;
    });
    this.setState({
      [group]: newState,
    });
  };

  // Render page
  render() {
    console.log(this.state.experiences);
    return (
      <div className="App">
        <p>All field must be filled for submitting CV.</p>
        <form>
          <General
            general={this.state.general}
            handleChange={this.handleInputChange}
          />
          <Education
            addForm={this.onAddEducation}
            education={this.state.education}
            handleChange={this.handleInputChange}
          />
          <EduDisplay
            educations={this.state.educations}
            handleChange={this.handleDisplayedListChange}
          />
          <Experience
            addForm={this.onAddExperience}
            experience={this.state.experience}
            handleChange={this.handleInputChange}
          />
          <ExpDisplay
            experiences={this.state.experiences}
            handleChange={this.handleDisplayedListChange}
          />
        </form>
      </div>
    );
  }
}
