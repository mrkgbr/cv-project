export default function General(props) {
  const { data, handleChange } = props;

  return (
    <>
      <h3>General</h3>
      <label htmlFor="firstName">First name:</label>
      <input
        type="text"
        id="firstName"
        data-name="firstName"
        data-group="general"
        value={data.general.firstName}
        onChange={handleChange}
        required
      />
      <label htmlFor="lastName">Last name:</label>
      <input
        type="text"
        id="lastName"
        data-name="lastName"
        data-group="general"
        value={data.general.lastName}
        onChange={handleChange}
        required
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        data-name="email"
        data-group="general"
        value={data.general.email}
        onChange={handleChange}
        required
      />
    </>
  );
}
