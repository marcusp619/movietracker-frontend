export const addMovies = movieInfo => ({
  type: 'ADD_MOVIES',
  movies: movieInfo,
});

export const updateMovies = movieArray => ({
  type: 'UPDATE_MOVIES',
  movies: movieArray,
})
