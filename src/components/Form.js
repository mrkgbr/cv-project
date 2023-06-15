import { Component } from "react";
import General from "./General";
import Education from "./Education";
import EduDisplay from "./EduDisplay";
import Experience from "./Experience";
import ExpDisplay from "./ExpDisplay";

export default class Form extends Component {
  // Render page
  render() {
    return (
      <div className="App">
        <p>All field must be filled for submitting CV.</p>
        <form>
          <General
            general={this.props.general}
            handleChange={this.props.handleInputChange}
          />
          <Education
            addForm={this.props.onAddEducation}
            education={this.props.education}
            handleChange={this.props.handleInputChange}
          />
          <EduDisplay
            educations={this.props.educations}
            handleChange={this.props.handleDisplayedListChange}
          />
          <Experience
            addForm={this.props.onAddExperience}
            experience={this.props.experience}
            handleChange={this.props.handleInputChange}
          />
          <ExpDisplay
            experiences={this.props.experiences}
            handleChange={this.props.handleDisplayedListChange}
          />
        </form>
      </div>
    );
  }
}
