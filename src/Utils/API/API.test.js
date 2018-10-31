import * as API from './';
import mockMovies from '../MockMovies';

describe('API', () => {
  const mockNewUserInfo = {
    name: 'Louisa',
    email: 'blah@gmail.com',
    password: 'oooooooooooookay',
    id: 1806
  }
  const mockFavInfo = {
    title: 'Paid In Full',
    vote_average: 2.9,
    favorite: true
  }

  describe('fetchMovies function', () => {
    it('should fire the fetch call', async () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockMovies.results),
        }),
      );

      API.fetchMovies();
      await expect(window.fetch).toHaveBeenCalled();
    });
  });

  describe('postNewUser function', () => {
    it('should fire the fetch call', async () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          method: 'POST',
          body: JSON.stringify({...mockNewUserInfo}),
          headers: {'Content-Type': 'application/json' }
        }),
      );

      API.postNewUser(mockNewUserInfo);
      await expect(window.fetch).toHaveBeenCalled();
    })
  })

  describe('checkUser function', () => {
    xit('should throw an error if there is no userInfo', async () => {
      API.checkUser({})
      await expect(() => {API.checkUser({})}).toThrow("No userInfo!");
    })

    it('should fire the fetch call if there is userInfo', async () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          method: 'POST',
          body: JSON.stringify(mockNewUserInfo),
          headers: {'Content-Type': 'application/json' }
        }),
      );
      API.checkUser(mockNewUserInfo)
      await expect(window.fetch).toHaveBeenCalled()
    })
  })

  describe('addFav function', () => {
    it('should fire the fetch call', async () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          method: 'POST',
          body: JSON.stringify(mockFavInfo),
          headers: {'Content-Type': 'application/json' }
        }),
      );
      API.addFav(mockFavInfo)
      await expect(window.fetch).toHaveBeenCalled()
    })
  })

  describe('getFavorites function', () => {
    it('should fire the fetch call', async () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockMovies.results),
        }),
      );
      API.getFavorites(mockNewUserInfo.id)
      await expect(window.fetch).toHaveBeenCalled()
    })
  })

  describe('removeFavorite function', () => {

  })

});
