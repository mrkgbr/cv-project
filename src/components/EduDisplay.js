export default function EduDisplay(props) {
  const { educations, schoolChange, studyChange, dateChange } = props;
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
                onChange={schoolChange}
              />
              <input
                type="text"
                value={education.studyTitle}
                data-id={education.id}
                onChange={studyChange}
              />
              <input
                type="date"
                value={education.date}
                data-id={education.id}
                onChange={dateChange}
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
}
