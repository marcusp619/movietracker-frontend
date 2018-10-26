import React from 'react';
import ReactDOM from 'react-dom';
import NewUserForm from './NewUserForm';
import { shallow } from 'enzyme';

describe('NewUserForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NewUserForm />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });
});