import React from 'react';
import ReactDOM from 'react-dom';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { shallow } from 'enzyme';
import { addMovies } from './Actions/';

describe('App', () => {
  let wrapper;
  let mockStore;
  const mockAddMovies = jest.fn()
  const mockUser = {
    name: "Louisa",
    id: 1806,
    email: "Louisa@turing.io",
    password: "oooooooooooookay"
  };

  beforeEach(() => {
    wrapper = shallow(<App 
      addMovies={mockAddMovies}
      user={mockUser} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("mapStateToProps function", () => {
    it("should return an object with the user", () => {
      const mockState = {
        movies: [],
        user: { name: "Louisa", email: "blah@gmail.com" },
        favorites: []
      };
      const expected = {
        user: { name: "Louisa", email: "blah@gmail.com" }
      };
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps function', () => {
    it('should call dispatch with an addMovies action when addMovies is called', () => {
      const mockMovieInfo = {
        backdrop_path:
          'http://image.tmdb.org/t/p/w1280/f4E0ocYeToEuXvczZv6QArrMDJ.jpg',
        id: 346910,
        overview:
          'From the outer reaches of space to the small-town streets of suburbia, the hunt comes home. Now, the universe’s most lethal hunters are stronger, smarter and deadlier than ever before, having genetically upgraded themselves with DNA from other species. When a young boy accidentally triggers their return to Earth, only a ragtag crew of ex-soldiers and a disgruntled science teacher can prevent the end of the human race.',
        poster_path:
          'https://image.tmdb.org/t/p/w300_and_h450_bestv2/wMq9kQXTeQCHUZOG4fAe5cAxyUA.jpg',
        release_date: '2018-09-13',
        title: 'The Predator',
        vote_average: 5.3,
        favorite: false,
      }
      const mockDispatch = jest.fn()
      const mockAction = addMovies(mockMovieInfo)
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.addMovies(mockMovieInfo)
      expect(mockDispatch).toHaveBeenCalledWith(mockAction)
    })
  })
});
