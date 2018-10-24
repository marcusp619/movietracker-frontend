import * as API from '../API/';
import { cleanMovieData } from './'
import mockMovies from '../MockMovies';

describe('Cleaners', () => {
  API.fetchMovies = jest.fn(() => { return mockMovies })

  describe('cleanMovieData', () => {

    it('should call fetchMovies', async () => {
      await cleanMovieData()
      await expect(API.fetchMovies).toHaveBeenCalled()
    })
  })
})