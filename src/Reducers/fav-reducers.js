const favorites = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [...state, action];
    default:
      return state;
  }
};

export default favorites;
