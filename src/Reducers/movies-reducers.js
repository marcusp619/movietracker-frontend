const movies = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIES':
      return [...state, ...action.movies];
    case 'UPDATE_MOVIES':
      return [...action.movies];
    case 'FILTER_MOVIES':
    console.log(action.movies)
      return action.movies.filter(film => film.favorite === true)
    case 'CLEAR_MOVIES':
      return []
    default:
      return state;
  }
};

export default movies;
