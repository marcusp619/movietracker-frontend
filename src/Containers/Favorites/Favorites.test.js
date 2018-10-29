import React, { Component } from 'react';
import { shallow } from 'enzyme';
import Favorites from './Favorites';

describe('Favorites Component', () => {
  let wrapper;

  xit('should match the snapshot', () => {
    wrapper = shallow(<Favorites />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders the correct amount of movie cards', () => {

  })

})
