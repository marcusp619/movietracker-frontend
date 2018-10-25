import React from 'react';

const MovieCard = (props) => {

  return (
    <div className='movie-card'>
      <img src={props.poster_path} alt='movie poster' />
      <h1>{props.title}</h1>
    </div>
  );
}

export default MovieCard;
