import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import { shallow } from 'enzyme';

describe('Header Component', () => {
  let wrapper;

  it('should match the snapshot', () => {
    wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot()
  })

})