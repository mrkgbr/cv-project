import { Component } from "react";
import "./App.css";
import Form from "./components/Form";

class App extends Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
    };
  }

  onSubmitForm = (e) => {
    e.preventDefault();
  };

  handleFirstNameChange = (e) => {
    e.preventDefault();
    this.setState({ firstName: e.target.value });
  };

  handleLastNameChange = (e) => {
    e.preventDefault();
    this.setState({ lastName: e.target.value });
  };

  handleEmailChange = (e) => {
    e.preventDefault();
    this.setState({ email: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <Form
          submitForm={this.onSubmitForm}
          email={this.state.email}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          firstNameChange={this.handleFirstNameChange}
          lastNameChange={this.handleLastNameChange}
          emailChange={this.handleEmailChange}
        />
      </div>
    );
  }
}

export default App;
