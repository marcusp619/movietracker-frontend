import movies from './movies-reducers';

describe('Movie Reducer', () => {
  
  it('should return original state as default', () => {
    let result = movies(undefined, { type: 'NONE' })
    expect(result).toEqual([])
  });

  it('should add a movie to state', () => {
    let mockAction = { type: 'ADD_MOVIES', movies: [ { title: 'A Star is Born', vote_average: 5 } ] }
    let mockPayload = { title: 'A Star is Born', vote_average: 5 }
    let result = movies(undefined, mockAction)

    expect(result).toEqual([ mockPayload ])
  });
});