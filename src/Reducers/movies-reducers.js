const movies = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIES':
      return [...state, ...action.movies];
    case 'UPDATE_MOVIES':
      return [...action.movies];
    default:
      return state;
  }
};

export default movies;
