import React from 'react';
import {connect} from 'react-redux';
import { filterMovies } from '../../Actions/';
import './MovieContainer.css';
import MovieCard from '../../Components/MovieCard/MovieCard';

const MovieContainer = ({movies, updateMovies}) => {
  const cards = movies.map(movie => {
    return <MovieCard key={movie.id} {...movie} />;
  });

  return <div className="movie-container"><button onClick={() => updateMovies(movies)}>FAVORITES</button>{cards}</div>;
};

const mapStateToProps = state => {
  return {
    movies: state.movies,
    user: state.user
  };
};

const mapDispatchToProps = dispatch => ({
  updateMovies: (movies) => dispatch(filterMovies(movies))
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);


// <a className="user-signup-link" href="/favorites" onClick={() => updateMovies(movies)}>FAVORITES</a>