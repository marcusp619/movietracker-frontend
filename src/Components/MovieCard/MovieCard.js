import React, { Component } from 'react';
import { addFavorites } from '../../Actions/favorite-actions';
import { updateMovies } from '../../Actions/';
import { connect } from 'react-redux';
import * as API from '../../Utils/API/';
import hollowStar from '../../Images/star.svg';
import solidStar from '../../Images/bookmark-star.svg';
import './MovieCard.css';


class MovieCard extends Component {
  constructor(props) {
    super();
    this.state = {
      favorite: false,
      userFavorites: [],
    };
  }

  async componentDidMount() {
    // console.log(this.props.user.id);
    let favoriteList = await API.getFavorites(this.props.user.id);
    this.mapFavorites(favoriteList);
  }

  mapFavorites = (movies) => {
    movies.map(fav => {
      if (fav.title === this.props.title) {
        this.setState({favorite: true});
      } else {
        return;
      }
    });
  };

  handleClick = () => {
    const { favorite } = this.state
    this.setState({favorite: !favorite})
    const { id } = this.props
    const newMovies = this.props.movies.map(movie => {
      if (movie.id === id) {
      movie.favorite = !movie.favorite
      return movie
      } else {
        return movie
      }
    })
    this.props.updateMovies(newMovies)
  };

  render() {
    const {favorite} = this.state;
      return (
        <div className="movie-card">
          <img
            className="star-icon"
            onClick={this.handleClick}
            src={!favorite ? hollowStar : solidStar}
            alt="Favorite not selected"
          />
          <img src={this.props.poster_path} alt="movie poster" />
          <h1>{this.props.title}</h1>
        </div>
      );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    movies: state.movies,
  };
};

const mapDispatchToProps = dispatch => ({
  handleFavorites: (movie) => {
    dispatch(addFavorites(movie));
  },
  updateMovies: (movieArray) => {
    dispatch(updateMovies(movieArray));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieCard);
