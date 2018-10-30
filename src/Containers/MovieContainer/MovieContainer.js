import React, { Component } from 'react';
import {connect} from 'react-redux';
import { NavLink, Route } from 'react-router-dom';
import { filterMovies } from '../../Actions/';
import './MovieContainer.css';
import MovieCard from '../../Components/MovieCard/MovieCard';

class MovieContainer extends Component {
  constructor(props) {
    super(props);

}

render() {
  const cards = this.props.movies.map(movie => {
    return <MovieCard key={movie.id} {...movie} />;
  });

  return  (
    <div className="movie-container">
      <NavLink to='/favorites'
        className='favorites-btn'
        onClick={() => this.props.updateMovies(this.props.movies)}
      >FAVORITES
      </NavLink>
      <Route exact path="/favorites" render={() => ([...cards]) }/>
      <Route exact path="/" render={() => ([...cards]) }/>
    </div>
  );
};
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

// <button onClick={() => updateMovies(movies)}>FAVORITES</button>

