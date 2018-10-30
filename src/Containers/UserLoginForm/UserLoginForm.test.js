import React from 'react';
import ReactDOM from 'react-dom';
import { UserLoginForm } from './UserLoginForm';
import { shallow } from 'enzyme';
import * as API from "../../Utils/API/";

describe('UserLoginForm', () => {
  let wrapper;
  const mockUserSignIn = jest.fn()
  const mockUser = {
    name: 'Louisa',
    id: 1806,
    email: 'Louisa@turing.io',
    password: 'oooooooooooookay'
  }
  const mockState = {
    email: 'Louisa',
    password: 'blah@gmail.com',
  }

  beforeEach(() => {
    wrapper = shallow(
                <UserLoginForm 
                  userSignIn={mockUserSignIn} 
                  user={mockUser} 
                />
              );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have the correct default state', () => {
    expect(wrapper.state().email).toEqual('')
    expect(wrapper.state().password).toEqual('')
  })

  describe('handleChange function', () => {
    it('should set state with the correct keys and values', () => {
      const emailInput = wrapper.find('.user-email-login')
      const passwordInput = wrapper.find('.user-password-login')
      emailInput.simulate('change', {target: {name: 'email', value: 'blah@gmail.com'}})
      passwordInput.simulate('change', {target: {name: 'password', value: 'oooooooooooookay'}})

      expect(wrapper.state().email).toEqual('blah@gmail.com')
      expect(wrapper.state().password).toEqual('oooooooooooookay')
    })
  })

  describe('handleSubmit function', () => {
    it('should call API.checkUser with the correct params', () => {
      API.checkUser = jest.fn()
      const mockForm = wrapper.find('.user-login-form')
      mockForm.simulate('submit', {preventDefault() {}})
      expect(API.checkUser).toHaveBeenCalled()
    })

    it('should call the userSignIn action creator with the correct params', () => {

    })

    it('should throw an error if the fetch call fails', () => {

    })
  })

  describe('mapStateToProps function', () => {

  })

  describe('mapDispatchToProps function', () => {

  })
});
