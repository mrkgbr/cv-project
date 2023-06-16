import { Component } from "react";
import "./General.css";

class General extends Component {
  render() {
    const general = this.props.general;
    return (
      <div className="General">
        <div>
          <h3>General</h3>
        </div>
        <div>
          <h4>
            {general.firstName} {general.lastName}
          </h4>
          <p>{general.email}</p>
        </div>
      </div>
    );
  }
}

export default General;
