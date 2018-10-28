export const newUser = (name, email, password) => ({
  type: 'NEW_USER',
  name,
  email,
  password,
});

export const signInUser = (user) => ({
  type: 'SIGN_IN_USER',
  name: user.name,
  id: user.id,
  email: user.email
});

export const signOutUser = (user) => ({
  type: 'SIGN_OUT_USER',
  name: user.email,
  favorites: user.favorites
});

export const toggleUserStatus = (status) => ({
  type: 'TOGGLE_STATUS',
  status: !status,
});
