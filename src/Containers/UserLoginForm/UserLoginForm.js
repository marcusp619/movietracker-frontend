import React, { Component } from 'react';
import { signInUser } from '../../Actions/user-actions';
import { connect } from 'react-redux';
import * as API from '../../Utils/API/'
import './UserLoginForm.css'

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

  handleSubmit = async (e) => {
    e.preventDefault()
    // try {
      const fetchedUser = await API.checkUser(this.state)
      console.log(fetchedUser)
      this.props.userSignIn(this.state) 
    // }
    // catch(error) {
      // console.log(error.message)
    // }
  }

  render() {
    // const { handleSubmit } = this.props
    const { email, value } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className="form-input user-email-login" 
          name="email"
          value={email}
          onChange={this.handleChange}
          placeholder="Enter Email Address" />
        <input 
          className="form-input user-password-login"
          type="password"
          name="password"
          value={value}
          onChange={this.handleChange}
          placeholder="Enter Password" />
        <button className="submit-btn">Go To Movies!</button>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  userSignIn: (user) => {
    dispatch((user) => signInUser(user))
  }
})

export default connect(null, mapDispatchToProps)(UserLoginForm)