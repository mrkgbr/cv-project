export default function ExpDisplay(props) {
  const { experiences } = props;
  let newArr = experiences;
  if (newArr.length === 0) {
    return;
  }
  return (
    <ul>
      {experiences.map((experience) => {
        return (
          <li key={experience.id}>
            {experience.company} {experience.position} {experience.task}{" "}
            {experience.start} {experience.end}
          </li>
        );
      })}
    </ul>
  );
}
