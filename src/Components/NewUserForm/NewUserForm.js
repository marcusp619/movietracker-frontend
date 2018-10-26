import React, { Component } from 'react';

class NewUserForm extends Component {
  constructor(props) {
    super(props)
    this.state ={
      name: '',
      email: '',
      password: '',
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()

  }

  render() {
    const { handleSubmit } = this.props
    const { name, email, password } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          name="name" 
          className="user-name-input" 
          value={name}
          onChange={this.handleChange}
          placeholder="Enter Full Name" />
        <input 
          name="email" 
          className="user-email-input" 
          value={email}
          onChange={this.handleChange}
          placeholder="Enter Email Address" />
        <input 
          name="password" 
          className="user-password-input" 
          value={password}
          onChange={this.handleChange}
          placeholder="Enter Password" />
        <button>Submit</button>
      </form>
    )
  }
}


export default NewUserForm;