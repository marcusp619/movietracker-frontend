import React from 'react';
import ReactDOM from 'react-dom';
import NewUserForm from './NewUserForm';
import {shallow} from 'enzyme';
import * as API from "../../Utils/API/";

describe('NewUserForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NewUserForm />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have the correct default state', () => {
    expect(wrapper.state().name).toEqual('')
    expect(wrapper.state().email).toEqual('')
    expect(wrapper.state().password).toEqual('')
    expect(wrapper.state().favorites).toEqual([])
    expect(wrapper.state().hasError).toEqual(false)
  })

  describe('handleChange function', () => {
    it('should set state with the correct keys and values', () => {
      const nameInput = wrapper.find('.user-name-input')
      const emailInput = wrapper.find('.user-email-input')
      const passwordInput = wrapper.find('.user-password-input')
      nameInput.simulate('change', {target: {name: 'name', value: 'Louisa'}})
      emailInput.simulate('change', {target: {name: 'email', value: 'blah@gmail.com'}})
      passwordInput.simulate('change', {target: {name: 'password', value: 'oooooooooooookay'}})

      expect(wrapper.state().name).toEqual('Louisa')
      expect(wrapper.state().email).toEqual('blah@gmail.com')
      expect(wrapper.state().password).toEqual('oooooooooooookay')
    })
  })

  describe('handleSubmit function', () => {
    let mockForm;

    beforeEach(() => {
      mockForm = wrapper.find('.new-user-form')
    })
    it('should call postNewUser with the correct params', () => {
      API.postNewUser = jest.fn()
      mockForm.simulate('submit', {preventDefault() {}})
      expect(API.postNewUser).toHaveBeenCalled()
    })

    it('should set state with hasError as true if fetch call fails', () => {
      const result = {error: "Welp, that didn't work!"}
      API.postNewUser = jest.fn().mockImplementation(() => {
        Promise.resolve(result)
      })
      mockForm.simulate('submit', {preventDefault() {}})
      expect(wrapper.state().hasError).toEqual(true)
    })
  })
});
