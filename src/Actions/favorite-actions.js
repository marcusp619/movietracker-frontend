export const addFavorite = (movie, user) => ({
  type: 'ADD_FAVORITE',
  movie_id: movie.id,
  user_id: user.id,
  title: movie.title,
  poster_path: movie.poster_path,
  release_date: movie.release_date,
  vote_average: movie.vote_average,
  overview: movie.overview,
});