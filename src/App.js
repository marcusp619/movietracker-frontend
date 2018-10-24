import React, { Component } from 'react';
import * as DataCleaner from './Utils/Cleaners/';
import MovieContainer from './Containers/MovieContainer';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { addMovies } from './Actions'

class App extends Component {

  async componentDidMount() {
    const movieInfo = await DataCleaner.cleanMovieData();
    this.props.addMovies(movieInfo)
  }

  render() {
    return (
      <div className="App">
        <MovieContainer />
      </div>
    );
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    addMovies: (movieInfo) => {
      dispatch(addMovies(movieInfo))
    }
  }
}

export default connect(null, mapDispatchToProps)(App);
