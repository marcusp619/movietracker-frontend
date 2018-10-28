import React from 'react';
import './MovieCard.css'

const MovieCard = (props) => {

  return (
    <div className='movie-card'>
      <img className='movie-poster' src={props.poster_path} alt='movie poster' />
      <h1 className='movie-title'>{props.title}</h1>
    </div>
  );
}

export default MovieCard;
