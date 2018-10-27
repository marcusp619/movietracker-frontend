import React, { Component } from 'react';
import * as DataCleaner from './Utils/Cleaners/';
import MovieContainer from './Containers/MovieContainer/MovieContainer';
import './App.css';
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { addMovies } from './Actions'
import NewUserForm from './Components/NewUserForm/NewUserForm';
import UserLoginForm from './Containers/UserLoginForm/UserLoginForm';

class App extends Component {

  async componentDidMount() {
    const movieInfo = await DataCleaner.cleanMovieData();
    this.props.addMovies(movieInfo)
  }

  render() {
    return (
      <div className="App">
        <div className="title-container">
          <span className="app-title">
            <span className="sparkle">MovieTracker</span>
          </span>
        </div>
        <Route exact path='/newuser' component={NewUserForm} />
        <Route exact path='/' component={MovieContainer} />
        <Route exact path='/login' component={UserLoginForm} />
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
