import { fetchMovies } from './';
import mockMovies from '../MockMovies';

describe('API', () => {

  describe('fetchMovies', () => {

    it('should fire the fetch call', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockMovies.results)
      }))

      fetchMovies()
      await expect(window.fetch).toHaveBeenCalled()
    })
  })
})