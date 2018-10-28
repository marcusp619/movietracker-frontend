import * as UserActions from './user-actions';

describe('User Actions Creators', () => {

  describe('newUser action creator', () => {
    it('should have a type of NEW_USER', () => {
      //name, email, password
      const mockName = 'Tupac Shakur'
      const mockEmail = 'tupac@thuglife.com'
      const mockPassword = 'onlyGodCanJudgeMe'
      const expectedAction = {
        type: 'NEW_USER',
        name: 'Tupac Shakur',
        email: 'tupac@thuglife.com',
        password: 'onlyGodCanJudgeMe'
      }

      const result = UserActions.newUser(mockName, mockEmail, mockPassword)

      expect(result).toEqual(expectedAction)
    })
  })

  describe('signInUser action creator', () => {
    it('should have a type of SIGN_IN_USER', () => {

    })
  })

  describe('signOutUser action creator', () => {
    it('should have a type of SIGN_OUT_USER', () => {

    })
  })

  describe('toggleUserStatus action creator', () => {
    it('should have a type of TOGGLE_STATUS', () => {

    })
  })

})