export default function Experience(props) {
  const { experience, handleChange, addForm } = props;
  return (
    <>
      <label htmlFor="company">Company name:</label>
      <input
        type="text"
        id="company"
        value={experience.company}
        onChange={handleChange}
        data-name="company"
        data-group="experience"
        required
      />
      <label htmlFor="position">Position:</label>
      <input
        type="text"
        id="position"
        data-name="position"
        data-group="experience"
        value={experience.position}
        onChange={handleChange}
        required
      />
      <label htmlFor="task">Main task:</label>
      <input
        type="text"
        id="task"
        data-name="task"
        data-group="experience"
        value={experience.task}
        onChange={handleChange}
        required
      />
      <label htmlFor="start">Start date:</label>
      <input
        type="date"
        id="start"
        data-name="start"
        data-group="experience"
        value={experience.start}
        onChange={handleChange}
        required
      />
      <label htmlFor="end">End date:</label>
      <input
        type="date"
        id="end"
        data-name="end"
        data-group="experience"
        value={experience.end}
        onChange={handleChange}
        required
      />
      <button type="button" onClick={addForm}>
        Add
      </button>
    </>
  );
}
