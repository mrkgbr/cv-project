export default function Experience(props) {
  const { experience, handleChange, addForm } = props;
  return (
    <>
      <h3>Experiences</h3>
      <label htmlFor="company">Company name:</label>
      <input
        type="text"
        id="company"
        value={experience.company}
        onChange={handleChange}
        data-name="company"
        data-group="experience"
      />
      <label htmlFor="position">Position:</label>
      <input
        type="text"
        id="position"
        data-name="position"
        data-group="experience"
        value={experience.position}
        onChange={handleChange}
      />
      <label htmlFor="task">Main task:</label>
      <textarea
        id="task"
        data-name="task"
        data-group="experience"
        value={experience.task}
        onChange={handleChange}
      />
      <label htmlFor="start">Start date:</label>
      <input
        type="date"
        id="start"
        data-name="start"
        data-group="experience"
        value={experience.start}
        onChange={handleChange}
      />
      <label htmlFor="end">End date:</label>
      <input
        type="date"
        id="end"
        data-name="end"
        data-group="experience"
        value={experience.end}
        onChange={handleChange}
      />
      <button type="button" onClick={addForm}>
        Add
      </button>
    </>
  );
}
