export default function Education(props) {
  const { submitForm } = props;
  return (
    <form onSubmit={submitForm}>
      <label htmlFor="schoolName">School name:</label>
      <input
        type="text"
        id="schoolName"
        // value={general.firstName}
        // onChange={firstNameChange}
      />
      <label htmlFor="studyTile">Title of study:</label>
      <input
        type="text"
        id="studyTitle"
        // value={general.lastName}
        // onChange={lastNameChange}
      />
      <label htmlFor="studyDate">Date of study:</label>
      <input
        type="date"
        id="studyDate"
        // value={general.email}
        // onChange={emailChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
