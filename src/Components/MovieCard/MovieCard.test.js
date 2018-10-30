import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {MovieCard, mapStateToProps, mapDispatchToProps} from './MovieCard';
import { shallow } from 'enzyme';

describe('MovieCard', () => {
  let wrapper
  let mockMovie = [{ poster_path: '/something.jpg', title: 'MOVIE' }]
  const store = jest.fn()
  
  beforeEach(() => {
    wrapper = shallow(<MovieCard key={1} {...mockMovie} />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should switch state to true favorited', () => {
    expect(wrapper.state().favorite).toEqual(false)
    wrapper.instance().mapFavorites(mockMovie)
    expect(wrapper.state().favorite).toEqual(true)
  });
});