export default function Experience(props) {
  const {
    submitForm,
    experience,
    companyChange,
    positionChange,
    taskChange,
    startChange,
    endChange,
  } = props;
  return (
    <>
      <label htmlFor="company">Company name:</label>
      <input
        type="text"
        id="company"
        value={experience.company}
        onChange={companyChange}
        required
      />
      <label htmlFor="position">Position:</label>
      <input
        type="text"
        id="position"
        value={experience.position}
        onChange={positionChange}
        required
      />
      <label htmlFor="task">Main task:</label>
      <input
        type="text"
        id="task"
        value={experience.task}
        onChange={taskChange}
        required
      />
      <label htmlFor="start">Start date:</label>
      <input
        type="date"
        id="start"
        value={experience.start}
        onChange={startChange}
        required
      />
      <label htmlFor="end">End date:</label>
      <input
        type="date"
        id="end"
        value={experience.end}
        onChange={endChange}
        required
      />
      <button type="button">Add</button>
    </>
  );
}
