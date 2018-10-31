import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink, Route } from "react-router-dom";
import { filterMovies, addMovies, clearMovies } from "../../Actions/";
import * as DataCleaner from "../../Utils/Cleaners/";
import "./MovieContainer.css";
import MovieCard from "../../Components/MovieCard/MovieCard";

export class MovieContainer extends Component {
  resetMovies = async () => {
    const movieInfo = await DataCleaner.cleanMovieData();
    this.props.clearMovies();
    this.props.addMovies(movieInfo);
  };

  render() {
    const cards = this.props.movies.map(movie => {
      return <MovieCard key={movie.id} {...movie} />;
    });

    return (
      <div>
        <Route
          exact
          path="/favorites"
          render={() => (
            <div>
              <div className="nav-btn-container">
                <NavLink to="/" className="home-btn" onClick={this.resetMovies}>
                  HOME
                </NavLink>
              </div>
              <div className="movie-container">{cards}</div>
            </div>
          )}
        />
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <div className="nav-btn-container">
                <NavLink
                  to="/favorites"
                  className="favorites-btn"
                  onClick={() => this.props.updateMovies(this.props.movies)}
                >
                  FAVORITES
                </NavLink>
              </div>
              <div className="movie-container">{cards}</div>
            </div>
          )}
        />
      </div>
    );
  }
}

export const mapStateToProps = state => {
  return {
    movies: state.movies,
    user: state.user
  };
};

export const mapDispatchToProps = dispatch => ({
  updateMovies: movies => dispatch(filterMovies(movies)),
  addMovies: movieInfo => dispatch(addMovies(movieInfo)),
  clearMovies: () => dispatch(clearMovies())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieContainer);
