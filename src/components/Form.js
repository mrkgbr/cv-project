export default function Form(props) {
  const {
    submitForm,
    email,
    firstName,
    lastName,
    firstNameChange,
    lastNameChange,
    emailChange,
  } = props;
  return (
    <form onSubmit={submitForm}>
      <label htmlFor="firstName">First name:</label>
      <input
        type="text"
        id="firstName"
        value={firstName}
        onChange={firstNameChange}
      />
      <label htmlFor="lastName">Last name:</label>
      <input
        type="text"
        id="lastName"
        value={lastName}
        onChange={lastNameChange}
      />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" value={email} onChange={emailChange} />
      <button type="submit">Submit</button>
    </form>
  );
}
