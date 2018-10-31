export const addMovies = movieInfo => ({
  type: "ADD_MOVIES",
  movies: movieInfo
});

export const updateMovies = movieArray => ({
  type: "UPDATE_MOVIES",
  movies: movieArray
});

export const filterMovies = moviesArray => ({
  type: "FILTER_MOVIES",
  movies: moviesArray
});

export const clearMovies = () => ({
  type: "CLEAR_MOVIES"
});
