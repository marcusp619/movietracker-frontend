import React, { Component } from 'react';
import {connect} from 'react-redux';
import { NavLink, Route } from 'react-router-dom';
import { filterMovies, addMovies, clearMovies } from '../../Actions/';
import * as DataCleaner from '../../Utils/Cleaners/';
import './MovieContainer.css';
import MovieCard from '../../Components/MovieCard/MovieCard';

class MovieContainer extends Component {
  constructor(props) {
    super(props);
  }

  resetMovies = async () => {
    const movieInfo = await DataCleaner.cleanMovieData();
    this.props.clearMovies()
    this.props.addMovies(movieInfo)
  }

  render() {
    const cards = this.props.movies.map(movie => {
      return <MovieCard key={movie.id} {...movie} />;
    });

    return  (
      <div className="movie-container">
        <Route exact path="/favorites" render={() => (
          <div>
            <NavLink to='/'
              className='home-btn'
              onClick={this.resetMovies}
            >HOME
            </NavLink>
            {cards}
          </div>
        ) }/>
        <Route exact path="/" render={() => (
          <div>
            <NavLink to='/favorites'
              className='favorites-btn'
              onClick={() => this.props.updateMovies(this.props.movies)}
            >FAVORITES
            </NavLink>
            {cards}
          </div>
        ) }/>
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
  updateMovies: (movies) => dispatch(filterMovies(movies)),
  addMovies: movieInfo => dispatch(addMovies(movieInfo)),
  clearMovies: () => dispatch(clearMovies())
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);

// <button onClick={() => updateMovies(movies)}>FAVORITES</button>

