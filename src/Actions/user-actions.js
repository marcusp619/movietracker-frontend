export const newUser = (name, email, password) => ({
  type: 'NEW_USER',
  name,
  email,
  password,
});

export const fetchUser = (status) => ({
  type: 'FETCH_USER',
  status,
});

export const toggleUserStatus = (status) => ({
  type: 'TOGGLE_STATUS',
  status: !status,
});
