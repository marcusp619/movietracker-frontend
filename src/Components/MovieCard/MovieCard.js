import React, { Component } from "react";
import { updateMovies } from "../../Actions/";
import { connect } from "react-redux";
import * as API from "../../Utils/API/";
import hollowStar from "../../Images/star.svg";
import solidStar from "../../Images/bookmark-star.svg";
import "./MovieCard.css";

class MovieCard extends Component {
  constructor(props) {
    super();
    this.state = {
      favorite: false
    };
  }

  async componentDidMount() {
    if (this.props.user) {
      let favoriteList = await API.getFavorites(this.props.user.id);
      this.mapFavorites(favoriteList);
    }
  }

  mapFavorites = movies => {
    movies.map(fav => {
      if (fav.title === this.props.title) {
        this.setState({ favorite: true });
        this.toggleFavoriteInState();
      } else {
        return;
      }
    });
  };

  handleClick = () => {
    if (!this.props.user) {
      alert("please login");
    } else {
      const { favorite } = this.state;
      this.setState({ favorite: !favorite });
      const { id } = this.props;
      const newMovies = this.props.movies.map(movie => {
        if (movie.id === id) {
          movie.favorite = !movie.favorite;
          this.handleFavorite(movie);
          return movie;
        } else {
          return movie;
        }
      });
      this.props.updateMovies(newMovies);
    }
  };

  toggleFavoriteInState = () => {
    this.props.movies.map(movie => {
      if (movie.id === this.props.id) {
        movie.favorite = !movie.favorite;
        return movie;
      } else {
        return movie;
      }
    });
  };

  handleFavorite = movie => {
    const {
      id,
      title,
      poster_path,
      release_date,
      vote_average,
      overview
    } = movie;
    let favoriteMovie = {
      movie_id: id,
      user_id: this.props.user.id,
      title,
      poster_path,
      release_date,
      vote_average,
      overview
    };
    if (!this.state.favorite) {
      API.addFav(favoriteMovie);
    } else if (this.state.favorite) {
      API.removeFavorite(favoriteMovie);
      this.toggleFavoriteInState();
    }
  };

  render() {
    const { favorite } = this.state;
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
    movies: state.movies
  };
};

const mapDispatchToProps = dispatch => ({
  updateMovies: movieArray => {
    dispatch(updateMovies(movieArray));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieCard);
