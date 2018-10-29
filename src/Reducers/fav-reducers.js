const favorites = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [
        ...state, 
        {id: action.movie_id,
          title: action.title,
          poster_path: action.poster_path,
          release_date: action.release_date,
          vote_average: action.vote_average,
          overview: action.overview
        }
      ];
    default:
      return state;
  }
};

export default favorites;
