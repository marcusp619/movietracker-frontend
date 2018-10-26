import React from 'react';
import ReactDOM from 'react-dom';
import UserLoginForm from './UserLoginForm';
import { shallow } from 'enzyme';

describe('NewUserForm', () => {
  let wrapper;
  let mockStore;

  beforeEach(() => {
    mockStore = { getState: jest.fn(), subscribe: jest.fn(), dispatch: jest.fn() }
    wrapper = shallow(<UserLoginForm store={mockStore} />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });
});