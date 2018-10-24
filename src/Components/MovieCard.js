import React from 'react';

const MovieCard = (props) => {

  return (
    <div className='movie-card'>
      <img src={props.poster_path} alt='movie poster' />
      <h1>{props.title}</h1>
      <p>{props.release_date}</p>
      <p>{props.overview}</p>
      <p>{props.vote_average}</p>
    </div>
  )
}

export default MovieCard;