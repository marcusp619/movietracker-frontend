import React from 'react';
import { connect } from 'react-redux';
import './MovieContainer.css';
import MovieCard from '../../Components/MovieCard/MovieCard';

const MovieContainer = ({movies}) => {
  
  const cards = movies.map((movie) => {
    return <MovieCard key={movie.id} {...movie} />
  })

  return (
    <div className='movie-container'>
      { cards }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  }
}

export default connect(mapStateToProps)(MovieContainer);
