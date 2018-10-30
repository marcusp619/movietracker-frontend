const users = (state = null, action) => {
  switch (action.type) {
    case "SIGN_IN_USER":
      return { name: action.name, id: action.id, email: action.email };
    case "SIGN_OUT_USER":
      return null;
    default:
      return state;
  }
};

export default users;
