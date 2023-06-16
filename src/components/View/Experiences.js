import { Component } from "react";
import "./Experiences.css";

class Experiences extends Component {
  render() {
    const experiences = this.props.experiences;
    return (
      <div className="Experiences">
        <div>
          <h3>Experiences</h3>
        </div>
        <div>
          <ul>
            {experiences.map((experience) => {
              return (
                <li key={experience.id}>
                  <h4>{experience.company}</h4>
                  <h5>{experience.position}</h5>
                  <p>{experience.task}</p>
                  <p>
                    {experience.start} - {experience.task}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Experiences;
