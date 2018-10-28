import React, {Component} from 'react';
import {addFavorite} from '../../Actions/favorite-actions';
import {connect} from 'react-redux';
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
    console.log(this.props.user.id);
    let favoriteList = await API.getFavorites(this.props.user.id);
    this.setState({userFavorites: favoriteList}, () => this.handleFavorites());
  }

  handleFavorites = () => {
    const {userFavorites} = this.state;
    userFavorites.map(fav => {
      if (fav.title === this.props.title) {
        this.setState({favorite: true});
      } else {
        return;
      }
    });
  };

  handleClick = () => {
    const {
      title,
      poster_path,
      id,
      release_date,
      vote_average,
      overview,
    } = this.props;
    this.setState({favorite: !this.state.favorite});
    this.props.handleFavorite(
      {title, poster_path, id, release_date, vote_average, overview},
      this.props.user,
    );
    let favoriteMovie = {
      title,
      poster_path,
      user_id: this.props.user.id,
      movie_id: id,
      release_date,
      vote_average,
      overview,
    };
    if (!this.state.favorite) {
      API.addFav(favoriteMovie);
    } else if (this.state.favorite) {
      API.removeFavorites(favoriteMovie);
    };
  };

  render() {
    const {favorite} = this.state;
    if (!favorite) {
      return (
        <div className="movie-card">
          <img
            className="star-icon"
            onClick={this.handleClick}
            src={hollowStar}
            alt="Favorite not selected"
          />
          <img src={this.props.poster_path} alt="movie poster" />
          <h1>{this.props.title}</h1>
        </div>
      );
    } else if (favorite) {
      return (
        <div className="movie-card">
          <img
            className="fav-star-icon"
            onClick={this.handleClick}
            src={solidStar}
            alt="Favorite not selected"
          />
          <img src={this.props.poster_path} alt="movie poster" />
          <h1>{this.props.title}</h1>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    favorites: state.favorites,
    user: state.user,
  };
};

const mapDispatchToProps = dispatch => ({
  handleFavorite: (movie, user) => {
    dispatch(addFavorite(movie, user));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieCard);
