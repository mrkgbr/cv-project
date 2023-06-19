import "./Educations.css";

function Educations(props) {
  const { educations } = props;
  return (
    <div className="Educations">
      <div>
        <h3>Educations</h3>
      </div>
      <div>
        <ul>
          {educations.map((education) => {
            return (
              <li key={education.id}>
                <h4>{education.schoolName}</h4>
                <p>{education.studyTitle}</p>
                <p>{education.date}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Educations;
