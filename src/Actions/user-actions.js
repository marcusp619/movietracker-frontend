export const newUser = (name, email, password) => ({
  type: 'NEW_USER',
  name,
  email,
  password,
});

export const signInUser = ({user}) => ({
  type: 'SIGN_IN_USER',
  name,
  favorites,
});

export const signOutUser = ({user}) => ({
  type: 'SIGN_OUT_USER',
  name,
  favorites,
});

export const toggleUserStatus = (status) => ({
  type: 'TOGGLE_STATUS',
  status: !status,
});
