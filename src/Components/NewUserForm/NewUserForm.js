import React, {Component} from 'react';
import * as API from '../../Utils/API';
import './NewUserForm.css';

class NewUserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      favorites: [],
    };
  }

  handleChange = e => {
    const {name, value} = e.target;
    this.setState({[name]: value});
  };

  handleSubmit = e => {
    e.preventDefault();
    API.postNewUser(this.state);
  };

  render() {
    const {name, email, password} = this.state;
    return (
      <div className="form-wrapper">
        <form className="new-user-form" onSubmit={this.handleSubmit}>
          <input
            name="name"
            className="form-input user-name-input"
            value={name}
            onChange={this.handleChange}
            placeholder="Enter Full Name"
          />
          <input
            name="email"
            className="form-input user-email-input"
            value={email}
            onChange={this.handleChange}
            placeholder="Enter Email Address"
          />
          <input
            name="password"
            type="password"
            className="form-input user-password-input"
            value={password}
            onChange={this.handleChange}
            placeholder="Enter Password"
          />
          <button className="signup-button">Sign Up!</button>
        </form>
      </div>
    );
  }
}

export default NewUserForm;
