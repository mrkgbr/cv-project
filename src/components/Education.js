export default function Education(props) {
  const { addForm, education, handleChange } = props;
  return (
    <>
      <label htmlFor="schoolName">School name:</label>
      <input
        type="text"
        id="schoolName"
        data-name="schoolName"
        data-group="education"
        value={education.schoolName}
        onChange={handleChange}
        required
      />
      <label htmlFor="studyTile">Title of study:</label>
      <input
        type="text"
        id="studyTitle"
        data-name="studyTitle"
        data-group="education"
        value={education.studyTitle}
        onChange={handleChange}
        required
      />
      <label htmlFor="studyDate">Date of study:</label>
      <input
        type="date"
        id="studyDate"
        data-name="date"
        data-group="education"
        value={education.date}
        onChange={handleChange}
        required
      />
      <button type="button" onClick={addForm}>
        Add
      </button>
    </>
  );
}
