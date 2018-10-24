import React, { Component } from 'react';
import * as DataCleaner from './Utils/Cleaners/';
import MovieContainer from './Containers/MovieContainer';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  async componentDidMount() {
    const data = await DataCleaner.cleanMovieData();   
  }
  render() {
    return (
      <div className="App">
        <MovieContainer />
      </div>
    );
  }
}

export default App;
