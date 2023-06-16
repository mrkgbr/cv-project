import { Component } from "react";

export default class View extends Component {
  render() {
    return (
      <div className="View">
        <h3>View component</h3>
        <button type="button" onClick={this.props.handleClick}>
          {this.props.buttonText}
        </button>
      </div>
    );
  }
}
