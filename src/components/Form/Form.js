import General from "./General";
import Education from "./Education";
import EduDisplay from "./EduDisplay";
import Experience from "./Experience";
import ExpDisplay from "./ExpDisplay";
import "./Form.css";

export default function Form(props) {
  // Render page
  return (
    <div className="Form">
      <form onSubmit={props.onSubmit}>
        <General data={props.data} handleChange={props.handleInputChange} />
        <Education
          addForm={props.onAddEducation}
          data={props.data}
          handleChange={props.handleInputChange}
        />
        <EduDisplay
          educations={props.educations}
          handleChange={props.handleDisplayedListChange}
          handleRemove={props.handleRemove}
        />
        <Experience
          addForm={props.onAddExperience}
          data={props.data}
          handleChange={props.handleInputChange}
        />
        <ExpDisplay
          experiences={props.experiences}
          handleChange={props.handleDisplayedListChange}
          handleRemove={props.handleRemove}
        />
        <button type="submit">{props.buttonText}</button>
      </form>
    </div>
  );
}
