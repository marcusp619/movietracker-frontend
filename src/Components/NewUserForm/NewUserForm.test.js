import React from 'react';
import ReactDOM from 'react-dom';
import NewUserForm from './NewUserForm';
import {shallow} from 'enzyme';

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

    })
  })

  describe('handleSubmit function', () => {
    it('should call postNewUser with the correct params', () => {

    })

    it('should set state with hasError as true if fetch call fails', () => {

    })
  })
});
