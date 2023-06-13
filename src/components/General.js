import { Component } from "react";

export default class General extends Component {
  constructor() {
    super();

    this.state = {
      isDisabled: false,
      buttonText: "Save",
    };
  }

  onButtonClick = (e) => {
    let text = this.state.buttonText === "Save" ? "Edit" : "Save";
    this.setState({
      isDisabled: !this.state.isDisabled,
      buttonText: text,
    });
  };

  render() {
    const { general, firstNameChange, lastNameChange, emailChange } =
      this.props;

    return (
      <>
        <label htmlFor="firstName">First name:</label>
        <input
          type="text"
          id="firstName"
          value={general.firstName}
          onChange={firstNameChange}
          required
          disabled={this.state.isDisabled}
        />
        <label htmlFor="lastName">Last name:</label>
        <input
          type="text"
          id="lastName"
          value={general.lastName}
          onChange={lastNameChange}
          required
          disabled={this.state.isDisabled}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={general.email}
          onChange={emailChange}
          required
          disabled={this.state.isDisabled}
        />
      </>
    );
  }
}
