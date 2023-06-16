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
    const { general, handleChange } = this.props;

    return (
      <>
        <h3>General</h3>
        <label htmlFor="firstName">First name:</label>
        <input
          type="text"
          id="firstName"
          data-name="firstName"
          data-group="general"
          value={general.firstName}
          onChange={handleChange}
          required
          disabled={this.state.isDisabled}
        />
        <label htmlFor="lastName">Last name:</label>
        <input
          type="text"
          id="lastName"
          data-name="lastName"
          data-group="general"
          value={general.lastName}
          onChange={handleChange}
          required
          disabled={this.state.isDisabled}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          data-name="email"
          data-group="general"
          value={general.email}
          onChange={handleChange}
          required
          disabled={this.state.isDisabled}
        />
      </>
    );
  }
}
