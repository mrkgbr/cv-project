import { Component } from "react";
import General from "./General";
import Education from "./Education";
import EduDisplay from "./EduDisplay";
import Experience from "./Experience";
import ExpDisplay from "./ExpDisplay";
import "./Form.css";

export default class Form extends Component {
  // Render page
  render() {
    return (
      <div className="Form">
        <form onSubmit={this.props.onSubmit}>
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
            handleRemove={this.props.handleRemove}
          />
          <Experience
            addForm={this.props.onAddExperience}
            experience={this.props.experience}
            handleChange={this.props.handleInputChange}
          />
          <ExpDisplay
            experiences={this.props.experiences}
            handleChange={this.props.handleDisplayedListChange}
            handleRemove={this.props.handleRemove}
          />
          <button type="submit">{this.props.buttonText}</button>
        </form>
      </div>
    );
  }
}
