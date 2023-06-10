export default function Education(props) {
  const { submitForm, education, schoolChange, studyChange, dateChange } =
    props;
  return (
    <form onSubmit={submitForm}>
      <label htmlFor="schoolName">School name:</label>
      <input
        type="text"
        id="schoolName"
        value={education.schoolName}
        onChange={schoolChange}
      />
      <label htmlFor="studyTile">Title of study:</label>
      <input
        type="text"
        id="studyTitle"
        value={education.studyTitle}
        onChange={studyChange}
      />
      <label htmlFor="studyDate">Date of study:</label>
      <input
        type="date"
        id="studyDate"
        value={education.date}
        onChange={dateChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
