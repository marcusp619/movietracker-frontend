import React, { Component } from 'react';
import { signInUser } from '../../Actions/user-actions';
import { connect } from 'react-redux';

class UserLoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      favorites: []
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    const { handleSubmit } = this.props
    const { email, value } = this.state
    return (
      <form onSubmit={handleSubmit}>
        <input
          className="user-email-login" 
          name="email"
          value={email}
          onChange={this.handleChange}
          placeholder="Enter Email Address" />
        <input 
          className="user-password-login"
          type="password"
          name="password"
          value={value}
          onChange={this.handleChange}
          placeholder="Enter Password" />
        <button>Go To Movies!</button>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: ({ email, password, favorites }) => {
    dispatch(({ email, password, favorites }) => signInUser(this.state))
  }
})

export default connect(null, mapDispatchToProps)(UserLoginForm)