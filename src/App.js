import React, { Component } from 'react';
import * as DataCleaner from './Utils/Cleaners/';
import MovieContainer from './Containers/MovieContainer/MovieContainer';
import './App.css';
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { addMovies } from './Actions'
import NewUserForm from './Containers/NewUserForm/NewUserForm';

class App extends Component {

  async componentDidMount() {
    const movieInfo = await DataCleaner.cleanMovieData();
    this.props.addMovies(movieInfo)
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/newuser' component={NewUserForm} />
        <Route exact path='/' component={MovieContainer} />
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
