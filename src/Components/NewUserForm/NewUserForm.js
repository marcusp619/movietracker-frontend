import React, { Component } from "react";
import * as API from "../../Utils/API";
import "./NewUserForm.css";

class NewUserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      favorites: [],
      hasError: false,
      isSuccess: false
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const result = await API.postNewUser(this.state);
    if (result.error) {
      this.setState({ hasError: true });
    } else {
    }
  };

  render() {
    const { name, email, password, hasError } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="name"
          className="user-name-input"
          value={name}
          onChange={this.handleChange}
          placeholder="Enter Full Name"
          required
        />
        {hasError ? <label htmlFor="Email">Email Already Taken</label> : null}
        <input
          name="email"
          id="Email"
          className="user-email-input"
          value={email}
          onChange={this.handleChange}
          placeholder="Enter Email Address"
          required
        />
        <input
          name="password"
          type="password"
          className="user-password-input"
          value={password}
          onChange={this.handleChange}
          placeholder="Enter Password"
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default NewUserForm;
