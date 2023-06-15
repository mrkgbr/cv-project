import { Component } from "react";
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

  handleRemove = (id, group) => {
    const newState = this.state[group].filter((item) => item.id !== id);
    this.setState({
      [group]: newState,
    });
  };

  // Render page
  render() {
    if (this.state.main)
      return (
        <div className="App">
          <Form
            general={this.state.general}
            education={this.state.education}
            educations={this.state.educations}
            experience={this.state.experience}
            experiences={this.state.experiences}
            onAddEducation={this.onAddEducation}
            onAddExperience={this.onAddExperience}
            handleInputChange={this.handleInputChange}
            handleDisplayedListChange={this.handleDisplayedListChange}
            handleRemove={this.handleRemove}
          />
          <button onClick={this.onSubmit}>{this.state.button}</button>
        </div>
      );
    return (
      <div>
        {/* <Form
          general={this.state.general}
          education={this.state.education}
          educations={this.state.educations}
          experience={this.state.experience}
          experiences={this.state.experiences}
          onAddEducation={this.onAddEducation}
          onAddExperience={this.onAddExperience}
          handleInputChange={this.handleInputChange}
          handleDisplayedListChange={this.handleDisplayedListChange}
        /> */}
        <button onClick={this.onSubmit}>{this.state.button}</button>
      </div>
    );
  }
}

export default App;
