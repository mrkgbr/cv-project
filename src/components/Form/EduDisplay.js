export default function EduDisplay(props) {
  const { educations, handleChange, handleRemove } = props;
  let newArr = educations;
  if (newArr.length === 0) {
    return;
  }
  return (
    <ul>
      {educations.map((education, index) => {
        return (
          <li key={education.id}>
            <h4>{index + 1}. school:</h4>
            <div>
              <input
                type="text"
                value={education.schoolName}
                data-id={education.id}
                data-group="educations"
                data-name="schoolName"
                onChange={handleChange}
              />
              <input
                type="text"
                value={education.studyTitle}
                data-id={education.id}
                data-group="educations"
                data-name="studyTitle"
                onChange={handleChange}
              />
              <input
                type="date"
                value={education.date}
                data-id={education.id}
                data-group="educations"
                data-name="date"
                onChange={handleChange}
              />
              <button
                type="button"
                onClick={() => handleRemove(education.id, "educations")}
              >
                Remove
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
