export const fetchMovies = async KEY => {
  const url = `https://api.themoviedb.org/3/movie/latest?api_key=${KEY}&language=en-US`;
  const response = await fetch(url);
  const result = await response.json();
  return result;
}
