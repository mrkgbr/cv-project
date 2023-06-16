import { Component } from "react";
import General from "./General-view";
import Educations from "./Educations";
import Experiences from "./Experiences";
import "./View.css";

export default class View extends Component {
  render() {
    return (
      <div>
        <div className="View">
          <General general={this.props.general} />
          <Educations educations={this.props.educations} />
          <Experiences experiences={this.props.experiences} />
        </div>
        <button
          type="button"
          onClick={this.props.handleClick}
          className="no-print"
        >
          {this.props.buttonText}
        </button>
      </div>
    );
  }
}
