import * as UserActions from "./user-actions";

describe("User Actions Creators", () => {
  const mockUser = {
    name: "Tupac Shakur",
    email: "tupac@thuglife.com",
    password: "onlyGodCanJudgeMe",
    id: 1,
    favorites: [
      { title: "Gone With The Wind" },
      { title: "Teen Titans Go - The Movie" },
      { title: "Belly" }
    ]
  };

  describe("newUser action creator", () => {
    it("should have a type of NEW_USER", () => {
      const expectedAction = {
        type: "NEW_USER",
        name: "Tupac Shakur",
        email: "tupac@thuglife.com",
        password: "onlyGodCanJudgeMe"
      };

      const result = UserActions.newUser(
        mockUser.name,
        mockUser.email,
        mockUser.password
      );

      expect(result).toEqual(expectedAction);
    });
  });

  describe("signInUser action creator", () => {
    it("should have a type of SIGN_IN_USER", () => {
      const expectedAction = {
        type: "SIGN_IN_USER",
        id: 1,
        name: "Tupac Shakur",
        email: "tupac@thuglife.com"
      };

      const result = UserActions.signInUser(mockUser);

      expect(result).toEqual(expectedAction);
    });
  });

  describe("signOutUser action creator", () => {
    it("should have a type of SIGN_OUT_USER", () => {
      const expectedAction = {
        type: "SIGN_OUT_USER",
        email: "tupac@thuglife.com",
        favorites: [
          { title: "Gone With The Wind" },
          { title: "Teen Titans Go - The Movie" },
          { title: "Belly" }
        ]
      };

      const result = UserActions.signOutUser(mockUser);

      expect(result).toEqual(expectedAction);
    });
  });
});
