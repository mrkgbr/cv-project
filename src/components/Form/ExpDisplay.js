export default function ExpDisplay(props) {
  const { experiences, handleChange, handleRemove } = props;
  let newArr = experiences;
  if (newArr.length === 0) {
    return;
  }
  return (
    <ul>
      {experiences.map((experience, index) => {
        return (
          <li key={experience.id}>
            <h4>{index + 1}. experience:</h4>
            <div>
              <input
                type="text"
                value={experience.company}
                data-id={experience.id}
                data-group="experiences"
                data-name="company"
                onChange={handleChange}
              />
              <input
                type="text"
                value={experience.position}
                data-id={experience.id}
                data-group="experiences"
                data-name="position"
                onChange={handleChange}
              />
              <textarea
                value={experience.task}
                data-id={experience.id}
                data-group="experiences"
                data-name="task"
                onChange={handleChange}
              />
              <input
                type="date"
                value={experience.start}
                data-id={experience.id}
                data-group="experiences"
                data-name="start"
                onChange={handleChange}
              />
              <input
                type="date"
                value={experience.end}
                data-id={experience.id}
                data-group="experiences"
                data-name="end"
                onChange={handleChange}
              />
              <button
                type="button"
                onClick={() => handleRemove(experience.id, "experiences")}
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
