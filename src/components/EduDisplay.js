export default function EduDisplay(props) {
  const { educations } = props;
  let newArr = educations;
  if (newArr.length === 0) {
    return;
  }
  return (
    <ul>
      {educations.map((education) => {
        return (
          <li key={education.id}>
            {education.schoolName} {education.studyTitle} {education.date}
          </li>
        );
      })}
    </ul>
  );
}
