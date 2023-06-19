export default function Education(props) {
  const { addForm, data, handleChange } = props;
  return (
    <>
      <h3>Educations</h3>
      <label htmlFor="schoolName">School name:</label>
      <input
        type="text"
        id="schoolName"
        data-name="schoolName"
        data-group="education"
        value={data.education.schoolName}
        onChange={handleChange}
      />
      <label htmlFor="studyTile">Title of study:</label>
      <input
        type="text"
        id="studyTitle"
        data-name="studyTitle"
        data-group="education"
        value={data.education.studyTitle}
        onChange={handleChange}
      />
      <label htmlFor="studyDate">Date of study:</label>
      <input
        type="date"
        id="studyDate"
        data-name="date"
        data-group="education"
        value={data.education.date}
        onChange={handleChange}
      />
      <button type="button" onClick={addForm}>
        Add
      </button>
    </>
  );
}
