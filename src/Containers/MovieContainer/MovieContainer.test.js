import React from 'react';
import ReactDOM from 'react-dom';
import { MovieContainer, mapStateToProps, mapDispatchToProps} from './MovieContainer';
import { shallow } from 'enzyme';
import * as mockDataCleaner from '../../Utils/Cleaners/';
import { addMovies, filterMovies, clearMovies } from '../../Actions/';

describe('MovieContainer', () => {
  let wrapper;
  const mockUser = {
    name: 'Louisa',
    id: 1806,
    email: 'Louisa@turing.io',
    password: 'oooooooooooookay'
  };
  const mockMovies = [
    {
      backdrop_path:
        'http://image.tmdb.org/t/p/w1280/VuukZLgaCrho2Ar8Scl9HtV3yD.jpg',
      id: 335983,
      overview:
        'When Eddie Brock acquires the powers of a symbiote, he will have to release his alter-ego "Venom" to save his life.',
      poster_path:
        'https://image.tmdb.org/t/p/w300_and_h450_bestv2/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg',
      release_date: '2018-10-03',
      title: 'Venom',
      vote_average: 6.6,
      favorite: false,
    },
    {
      backdrop_path:
        'http://image.tmdb.org/t/p/w1280/840rbblaLc4SVxm8gF3DNdJ0YAE.jpg',
      id: 332562,
      overview:
        "Seasoned musician Jackson Maine discovers—and falls in love with—struggling artist Ally. She has just about given up on her dream to make it big as a singer—until Jack coaxes her into the spotlight. But even as Ally's career takes off, the personal side of their relationship is breaking down, as Jack fights an ongoing battle with his own internal demons.",
      poster_path:
        'https://image.tmdb.org/t/p/w300_and_h450_bestv2/wrFpXMNBRj2PBiN4Z5kix51XaIZ.jpg',
      release_date: '2018-10-03',
      title: 'A Star Is Born',
      vote_average: 7.5,
      favorite: false,
    },
    {
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
    },
  ];
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
  const mockUpdateMovies = jest.fn();
  const mockAddMovies = jest.fn();
  const mockClearMovies = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <MovieContainer
        movies={mockMovies}
        user={mockUser}
        updateMovies={mockUpdateMovies}
        addMovies={mockAddMovies}
        clearMovies={mockClearMovies} />)
  })
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('resetMovies function', () => {
    it('should call cleanMovieData', async () => {
      mockDataCleaner.cleanMovieData = jest.fn()
      wrapper.instance().resetMovies()
      await expect(mockDataCleaner.cleanMovieData).toHaveBeenCalled()
    })

    it('should call clearMovies', async () => {
      wrapper.instance().resetMovies()
      await expect(mockClearMovies).toHaveBeenCalled()
    })

    it('should call addMovies with the correct params', async () => {
      mockDataCleaner.cleanMovieData = jest.fn().mockImplementation(() => {
        Promise.resolve(mockMovieInfo)
      })
      wrapper.instance().resetMovies()
      await expect(mockAddMovies).toHaveBeenCalled()
    })
  })

  describe('mapStateToProps function', () => {
    it('should return an object with a user and a movies array', () => {
      const mockState = {
        movies: [
          {title: 'Coco', vote_average: 7.6, favorite: true},
          {title: 'Inception', vote_average: 8.6, favorite: true},
          {title: 'Hunt for Red October', vote_average: 4.6, favorite: true}
        ],
        user: {name: 'Louisa', email: 'blah@gmail.com'},
        favorites: []
      }
      const expected = {
        user: {name: 'Louisa', email: 'blah@gmail.com'},
        movies: [
          {title: 'Coco', vote_average: 7.6, favorite: true},
          {title: 'Inception', vote_average: 8.6, favorite: true},
          {title: 'Hunt for Red October', vote_average: 4.6, favorite: true}
        ],
      }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })
  })

  describe('mapDispatchToProps function', () => {
    const mockDispatch = jest.fn()
    const mockFilterAction = filterMovies(mockMovies)
    const mockAddAction = addMovies(mockMovieInfo)
    const mockClearAction = clearMovies()
    let mappedProps;

    beforeEach(() => {
      mappedProps = mapDispatchToProps(mockDispatch)
    })

    it('should call dispatch with a filterMovies action when updateMovies is called', () => {
      mappedProps.updateMovies(mockMovies)
      expect(mockDispatch).toHaveBeenCalledWith(mockFilterAction)
    })

    it('should call dispatch with an addMovies action when addMovies is called', () => {
      mappedProps.addMovies(mockMovieInfo)
      expect(mockDispatch).toHaveBeenCalledWith(mockAddAction)
    })

    it('should call dispatch with a clearMovies action when clearMovies is called', () => {
      mappedProps.clearMovies()
      expect(mockDispatch).toHaveBeenCalledWith(mockClearAction)
    })
  })
});
