import movies from './movies-reducers';
import users from './user-reducers';
import * as UserActions from '../Actions/user-actions';

describe('Movie Reducer', () => {
  let mockAction;
  let mockPayload;
  let result;

  it('should return original state as default', () => {
    result = movies(undefined, {type: 'NONE'});
    expect(result).toEqual([]);
  });

  it('should add a movie to state', () => {
    mockAction = {
      type: 'ADD_MOVIES',
      movies: [{title: 'A Star is Born', vote_average: 5}],
    };
    mockPayload = {title: 'A Star is Born', vote_average: 5};
    result = movies(undefined, mockAction);

    expect(result).toEqual([mockPayload]);
  });

  it('should update the favorite status of a movie', () => {
    mockAction = {
      type: 'UPDATE_MOVIES',
      movies: [{title: 'A Star is Born', vote_average: 5}]
    }
    mockPayload = {title: 'A Star is Born', vote_average: 5}
    result = movies([], mockAction);

    expect(result).toEqual([mockPayload])
  })

  it('should filter through all movies to return only favorites', () => {
    mockAction = {
      type: 'FILTER_MOVIES',
      movies: [
        {title: 'A Star is Born', vote_average: 5, favorite: false},
        {title: 'Night School', vote_average: 7.2, favorite: true},
        {title: 'Halloween', vote_average: 4.5, favorite: false},
        {title: 'Venom', vote_average: 5.7, favorite: true},
      ]
    }
    mockPayload = {title: 'A Star is Born', vote_average: 5}
    result = movies([], mockAction)

    expect(result).toHaveLength(2)
  })

  it('should clear out the movies array in global state', () => {
    mockAction = {
      type: 'CLEAR_MOVIES'
    }
    const mockState = [
      {title: 'A Star is Born', vote_average: 5, favorite: false},
      {title: 'Night School', vote_average: 7.2, favorite: true},
      {title: 'Halloween', vote_average: 4.5, favorite: false},
      {title: 'Venom', vote_average: 5.7, favorite: true},
    ]
    mockPayload = []
    result = movies(mockState, mockAction)

    expect(result).toEqual(mockPayload)
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
      const mockUser = {
        name: "Tony Stark",
        id: 12,
        email: 'tony.stark@starkindustries.com',
        favorites: [{
          title: 'Night School', 
          id: 23457, 
          overview: 'Some people go to night school and hijinx ensues', 
          poster_path: 'http://randomPosterPath.jpg', 
          release_date: '2018-10-28', 
          vote_average: 6.6
        }]
      }
      const mockState = [mockUser]
      const mockAction = UserActions.signOutUser(mockUser)
      const expected = {}

      const result = users(mockUser, mockAction)

      expect(result).toEqual(expected)
    })
  })

})
