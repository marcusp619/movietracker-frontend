import React, { Component } from 'react';
import { signInUser } from '../../Actions/user-actions';
import { connect } from 'react-redux';
import * as API from '../../Utils/API/';

class UserLoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
      const fetchedUser = await API.checkUser(this.state)
      this.props.userSignIn(fetchedUser) 
  }

  render() {
    const { email, value } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
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

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = (dispatch) => ({
  userSignIn: (user) => {
    dispatch(signInUser(user))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(UserLoginForm)