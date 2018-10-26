const users = (state={}, action) => {
  switch(action.type) {
    case 'SIGN_IN_USER':
      return {name: action.name, favorites: action.favorites};
    case 'SIGN_OUT_USER':
      return {};
    default:
      return state;
  }
}

export default users;