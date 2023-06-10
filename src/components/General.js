export default function General(props) {
  const { submitForm, general, firstNameChange, lastNameChange, emailChange } =
    props;

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="firstName">First name:</label>
      <input
        type="text"
        id="firstName"
        value={general.firstName}
        onChange={firstNameChange}
      />
      <label htmlFor="lastName">Last name:</label>
      <input
        type="text"
        id="lastName"
        value={general.lastName}
        onChange={lastNameChange}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={general.email}
        onChange={emailChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}