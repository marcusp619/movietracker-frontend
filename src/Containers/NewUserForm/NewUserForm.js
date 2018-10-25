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

  const handleSubmit = (e) => {
    const { name, value } = e.target
    const { handleSubmit } = this.props
    this.setState({ [name]: value })
  }

  render() {
    const { name, email, password } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          name="name" 
          className="user-name-input" 
          value={name}
          onChange={this.handleChange} />
        <input 
          name="email" 
          className="user-email-input" 
          value={email}
          onChange={this.handleChange} />
        <input 
          name="password" 
          className="user-password-input" 
          value={password}
          onChange={this.handleChange} />
        <button>Submit</button>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  handleSubmit: (name, email, password) => ({
    dispatch(newUser(name, email, password))
  })
}

export default connect (null, mapDispatchToProps)(NewUserForm)