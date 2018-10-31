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
    favorite: true,
    movie_id: 12345,
    user_id: 1806
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
      // API.checkUser.mockImplementation(() => {
      //   throw Error("No userInfo!");
      // });
      await API.checkUser()
      expect(API.checkUser).toThrowError("No userInfo!");
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

    it.skip('should return an object with the users name, email, and id', async () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          method: 'POST',
          body: JSON.stringify(mockNewUserInfo),
          headers: {'Content-Type': 'application/json' }
        }),
      );
      const expected = {
        name: 'Louisa',
        email: 'blah@gmail.com',
        id: 1806
      }
      const spy = spyOn(API, 'checkUser')
      await expect(spy).toHaveReturnedWith(expected)
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
    it('should fire the fetch call', async () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          method: 'DELETE',
          body: JSON.stringify({
            movie_id: mockFavInfo.movie_id,
            user_id: mockFavInfo.user_id
          }),
          headers: {'Content-Type': 'application/json' }
        }),
      );
      API.removeFavorite(mockFavInfo)
      await expect(window.fetch).toHaveBeenCalled()
    })

    it.skip('should throw an error if the fetch call fails', async () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          ok: false,
          json: () => Promise.resolve(mockMovies.results),
        }),
      );
      API.removeFavorite(mockFavInfo)
      await expect()
    })
  })
});
