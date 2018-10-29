import * as FavoritesReducer from './favorite-actions';

describe('Favorites Action Creator', () => {
  it('should have a type of ADD_FAVORITE', () => {
    const mockMovie = {
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
    }
    const mockUser = {
      name: "Tony Stark",
      id: 12345,
      email: 'tony.stark@starkindustries.com',
    }
    const expectedAction = {
      type: 'ADD_FAVORITE',
      movie_id: 335983,
      user_id: 12345,
      title: 'Venom',
      poster_path: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg',
      release_date: '2018-10-03',
      vote_average: 6.6,
      overview: 'When Eddie Brock acquires the powers of a symbiote, he will have to release his alter-ego "Venom" to save his life.',
    }

    const result = FavoritesReducer.addFavorites(mockMovie, mockUser)

    expect(result).toEqual(expectedAction)
  })
})