import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;
  let mockStore

  beforeEach(() => {
    mockStore = { getState: jest.fn(), subscribe: jest.fn(), dispatch: jest.fn() }
    wrapper = shallow(<App store={mockStore} />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
