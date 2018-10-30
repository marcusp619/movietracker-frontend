import React, { Component } from "react";
import { signInUser } from "../../Actions/user-actions";
import { connect } from "react-redux";
import * as API from "../../Utils/API/";
import "./UserLoginForm.css";

export class UserLoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    try {
      const fetchedUser = await API.checkUser(this.state);
      this.props.userSignIn(fetchedUser);
    } catch (error) {
      console.log(error.message);
    }
  };

  render() {
    const { email, value } = this.state;
    return (
      <div className="form-wrapper">
        <form className="user-login-form" onSubmit={this.handleSubmit}>
          <input
            className="form-input user-email-login"
            name="email"
            value={email}
            onChange={this.handleChange}
            placeholder="Enter Email Address"
          />
          <input
            className="form-input user-password-login"
            type="password"
            name="password"
            value={value}
            onChange={this.handleChange}
            placeholder="Enter Password"
          />
          <button className="login-button">Go To Movies!</button>
          <a className="user-signup-link" href="/newuser">
            New User Sign Up
          </a>
        </form>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  user: state.user
});

export const mapDispatchToProps = dispatch => ({
  userSignIn: user => {
    dispatch(signInUser(user));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserLoginForm);
