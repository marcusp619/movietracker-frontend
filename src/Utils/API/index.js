import { key } from './API_KEY';

export const fetchMovies = async() => {
  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`;
  const response = await fetch(url);
  const result = await response.json();
  return result;
}
