import General from "./General-view";
import Educations from "./Educations";
import Experiences from "./Experiences";
import "./View.css";

export default function View(props) {
  const { general, educations, experiences, handleClick, buttonText } = props;
  return (
    <div>
      <div className="View">
        <General general={general} />
        <Educations educations={educations} />
        <Experiences experiences={experiences} />
      </div>
      <button type="button" onClick={handleClick} className="no-print">
        {buttonText}
      </button>
    </div>
  );
}
