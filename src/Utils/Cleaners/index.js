import * as API from '../API/';

export const cleanMovieData = async () => {
  const rawMovieData = await API.fetchMovies()
  const posterURL = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2';
  const backdropURL = 'http://image.tmdb.org/t/p/w1280';
  return rawMovieData.results.map(movie => {
    const {title, id, poster_path, backdrop_path, release_date, vote_average, overview} = movie;
    
    return {
      title, 
      id, 
      poster_path: `${posterURL}${poster_path}`, 
      backdrop_path: `${backdropURL}${backdrop_path}`,
      release_date, 
      vote_average, 
      overview
    }
  });
}


