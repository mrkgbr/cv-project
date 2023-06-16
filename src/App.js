import { Component } from "react";
import Form from "./components/Form/Form";
import uniqid from "uniqid";
import View from "./components/View/View";

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
      button = "Edit";
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
    } else {
      alert("Please fill all the inputs to add a new section.");
    }
  };

  // Work experience form functions
  onAddExperience = () => {
    if (
      this.state.experience.company &&
      this.state.experience.position &&
      this.state.experience.task &&
      this.state.experience.start &&
      this.state.experience.end
    ) {
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
    } else {
      alert("Please fill all the inputs to add a new section.");
    }
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
            onSubmit={this.onSubmit}
            buttonText={this.state.button}
          />
          {/* <button onClick={this.onSubmit}>{this.state.button}</button> */}
        </div>
      );
    return (
      <div>
        <View
          handleClick={this.onSubmit}
          buttonText={this.state.button}
          general={this.state.general}
          educations={this.state.educations}
          experiences={this.state.experiences}
        />
      </div>
    );
  }
}

export default App;
