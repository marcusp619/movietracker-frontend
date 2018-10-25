import * as API from '../API/';
import { cleanMovieData } from './'
import mockMovies from '../MockMovies';
import mockCleanMovies from '../MockCleanMovies';

describe('Cleaners', () => {
  API.fetchMovies = jest.fn(() => { return mockMovies })

  describe('cleanMovieData', () => {

    it('should call fetchMovies', async () => {
      await cleanMovieData()
      await expect(API.fetchMovies).toHaveBeenCalled()
    })

    it('should clean movie data', async () => {
      const cleanMovies = await cleanMovieData()
      await expect(cleanMovies[0]).toEqual(mockCleanMovies[0])
    })
  })
})