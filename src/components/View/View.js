import { Component } from "react";
import General from "./General-view";
import Educations from "./Educations";
import Experiences from "./Experiences";

export default class View extends Component {
  render() {
    return (
      <div className="View">
        <General general={this.props.general} />
        <Educations educations={this.props.educations} />
        <Experiences experiences={this.props.experiences} />
        <button type="button" onClick={this.props.handleClick}>
          {this.props.buttonText}
        </button>
      </div>
    );
  }
}
