import React, { Component } from 'react';
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

  handleClick = () => {
    this.setState({ favorite: !this.state.favorite })
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

export default MovieCard;
