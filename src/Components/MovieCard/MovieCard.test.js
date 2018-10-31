import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import * as API from '../../Utils/API'
import {MovieCard, mapStateToProps, mapDispatchToProps} from './MovieCard';
import { updateMovies } from '../../Actions';
import { shallow } from 'enzyme';

describe('MovieCard', () => {
  let wrapper
  let mockMovie = { id: 7, poster_path: '/something.jpg', title: 'MOVIE', favorite: false }
  const store = jest.fn()
  
  beforeEach(() => {
    wrapper = shallow(<MovieCard key={1} {...mockMovie} />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  describe('mapFavorites', () => {
    it('should fire toggleFavoriteInState if title matches', () => {
      wrapper.instance().toggleFavoriteInState = jest.fn()
      wrapper.instance().mapFavorites([mockMovie])
    })
  });

  describe('handleClick function', () => {
    it('should switch state to true favorited', () => {
      wrapper.instance().toggleFavoriteInState = jest.fn()
      expect(wrapper.state().favorite).toEqual(false)
      wrapper.instance().mapFavorites([mockMovie])
      expect(wrapper.state().favorite).toEqual(true)
    });
  });
  
  describe('handleFavorite function', () => {
    it('should fire addFav if favorite in state is false', () => {
      API.addFav = jest.fn()
      let mockUser = { id: 7 }
      let newWrapper = shallow(<MovieCard key={1} {...mockMovie} user={mockUser} />)
      newWrapper.instance().handleFavorite(mockMovie)
      expect(API.addFav).toHaveBeenCalled()
    });
  
    it('should fire removeFavorite if favorite in state is true', () => {
      API.removeFavorite = jest.fn()
      let mockUser = { id: 7 }
      let newWrapper = shallow(<MovieCard key={1} {...mockMovie} user={mockUser} />)
      newWrapper.instance().toggleFavoriteInState = jest.fn()
      newWrapper.instance().setState({ favorite: true })
      newWrapper.instance().handleFavorite(mockMovie)
      expect(API.removeFavorite).toHaveBeenCalled()
    });
  });

  describe('mapStateToProps function', () => {
    it('should return an object with the user and movies', () => {
      const mockState = {
        movies: [ { title: 'MOVIE' } ],
        user: {name: 'Al-awesome', email: 'blah@gmail.com'},
        favorites: []
      }
      const expected = {
        user: {name: 'Al-awesome', email: 'blah@gmail.com'},
        movies: [ { title: 'MOVIE' } ]
      }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    });
  });

  describe('mapDispatchToProps function', () => {
    it('calls dispatch with a updateMovies action when updateMovies is called', () => {
      const mockDispatch = jest.fn()
      const mockDispatchAction = updateMovies([mockMovie])
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.updateMovies([mockMovie])
      expect(mockDispatch).toHaveBeenCalledWith(mockDispatchAction)
    })
  })
});