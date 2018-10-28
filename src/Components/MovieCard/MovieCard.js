import React, { Component } from 'react';
import { addFavorite } from '../../Actions/favorite-actions';
import { connect } from 'react-redux';
import hollowStar from '../../Images/star.svg';
import solidStar from '../../Images/bookmark-star.svg';
import './MovieCard.css';

class MovieCard extends Component {
  constructor(props) {
    super();

    this.state = {
      favorite: false
    }
  }

  componentDidMount() {
    if (this.props.favorite === true) {
      this.setState({ favorite: true })
    }
  }

  handleClick = () => {
    const { title, poster_path, id, release_date, vote_average, overview } = this.props
    this.setState({ favorite: !this.state.favorite })
    this.props.handleFavorite({ title, poster_path, id, release_date, vote_average, overview }, this.props.user)
  }

  render() {
    const { favorite } = this.state
    if (!favorite) {
      return (
        <div className='movie-card'>
          <img 
            className='star-icon'
            onClick={this.handleClick} 
            src={hollowStar} 
            alt='Favorite not selected' 
          />
          <img 
            src={this.props.poster_path} 
            alt='movie poster' 
          />
          <h1>{this.props.title}</h1>
        </div>
      );
    } else if (favorite) {
      return (
        <div className='movie-card'>
          <img 
            className='fav-star-icon' 
            onClick={this.handleClick}
            src={solidStar} 
            alt='Favorite not selected' 
          />
          <img 
            src={this.props.poster_path} 
            alt='movie poster' 
          />
          <h1>{this.props.title}</h1>
        </div>
      ); 
    }
  }
}

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleFavorite: (movie, user) => {
    dispatch(addFavorite(movie, user))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);
