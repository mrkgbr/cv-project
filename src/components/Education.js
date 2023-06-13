export default function Education(props) {
  const { addForm, education, schoolChange, studyChange, dateChange } = props;
  return (
    <>
      <label htmlFor="schoolName">School name:</label>
      <input
        type="text"
        id="schoolName"
        value={education.schoolName}
        onChange={schoolChange}
        required
      />
      <label htmlFor="studyTile">Title of study:</label>
      <input
        type="text"
        id="studyTitle"
        value={education.studyTitle}
        onChange={studyChange}
        required
      />
      <label htmlFor="studyDate">Date of study:</label>
      <input
        type="date"
        id="studyDate"
        value={education.date}
        onChange={dateChange}
        required
      />
      <button type="button" onClick={addForm}>
        Add
      </button>
    </>
  );
}
