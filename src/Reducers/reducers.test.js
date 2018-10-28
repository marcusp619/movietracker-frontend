import movies from './movies-reducers';
import favorites from './fav-reducers';
import users from './user-reducers';
import { addFavorite } from '../Actions/favorite-actions';
import * as UserActions from '../Actions/user-actions';

describe('Movie Reducer', () => {
  it('should return original state as default', () => {
    let result = movies(undefined, {type: 'NONE'});
    expect(result).toEqual([]);
  });

  it('should add a movie to state', () => {
    let mockAction = {
      type: 'ADD_MOVIES',
      movies: [{title: 'A Star is Born', vote_average: 5}],
    };
    let mockPayload = {title: 'A Star is Born', vote_average: 5};
    let result = movies(undefined, mockAction);

    expect(result).toEqual([mockPayload]);
  });
});

describe('Favorites Reducer', () => {
  it('should return original state as default', () => {
    let result = favorites(undefined, {type: ''});
    expect(result).toEqual([]);
  })

  it('should add a favorite movie to state', () => {
    const mockStateFavs = [{
      title: 'Night School', 
      id: 23457, 
      overview: 'Some people go to night school and hijinx ensues', 
      poster_path: 'http://randomPosterPath.jpg', 
      release_date: '2018-10-28', 
      vote_average: 6.6
    }]
    const mockNewFavMovie = {
      title: 'Venom',
      id: 335983,
      overview:
        'When Eddie Brock acquires the powers of a symbiote, he will have to release his alter-ego "Venom" to save his life.',
      poster_path:
        'https://image.tmdb.org/t/p/w300_and_h450_bestv2/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg',
      release_date: '2018-10-03',
      vote_average: 6.6,
    }
    const mockNewUser = {
      name: "Tony Stark",
      id: 12,
      email: 'tony.stark@starkindustries.com',
    }
    const mockFavAction = addFavorite(mockNewFavMovie, mockNewUser)
    const expected = [...mockStateFavs, mockNewFavMovie]

    const result = favorites(mockStateFavs, mockFavAction)

    expect(result).toEqual(expected)
  })

  describe('Users Reducer', () => {
    it('should return original state as default', () => {
      let result = users(undefined, {type: ''});
      expect(result).toEqual(null)
    })

    it('should sign in a user in state', () => {
      const mockState = {}
      const mockUser = {
        name: "Tony Stark",
        id: 12,
        email: 'tony.stark@starkindustries.com',
      }
      const mockAction = UserActions.signInUser(mockUser)

      const expected = {
        name: mockUser.name, 
        id: mockUser.id, 
        email: mockUser.email
      }

      const result = users(mockUser, mockAction)

      expect(result).toEqual(expected)
    })

    it('should sign out a user in state', () => {

    })
  })

})
