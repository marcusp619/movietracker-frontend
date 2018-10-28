import React, {Component} from 'react';
import * as DataCleaner from './Utils/Cleaners/';
import MovieContainer from './Containers/MovieContainer/MovieContainer';
import './App.css';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import {withRouter} from 'react-router';
import {addMovies} from './Actions';
import NewUserForm from './Components/NewUserForm/NewUserForm';
import UserLoginForm from './Containers/UserLoginForm/UserLoginForm';
import Header from './Components/Header/Header';

class App extends Component {
  async componentDidMount() {
    const movieInfo = await DataCleaner.cleanMovieData();
    this.props.addMovies(movieInfo);
  }

  render() {
    return (
      <div className="App">
        <div className="title-container">
          <span className="app-title">
            <span className="sparkle">MovieTracker</span>
          </span>
        </div>
        <Route exact path="/newuser" component={NewUserForm} />
        <Route
          exact
          path="/"
          render={() =>
            !this.props.user ? <Redirect to="/login" /> : <MovieContainer />
          }
        />
        <Route
          exact
          path="/login"
          render={() =>
            this.props.user ? <Redirect to="/" /> : <UserLoginForm />
          }
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => {
  return {
    addMovies: movieInfo => {
      dispatch(addMovies(movieInfo));
    },
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(App),
);
