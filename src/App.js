import React, { Component } from 'react';
import * as DataCleaner from './Utils/Cleaners/';

import logo from './logo.svg';
import './App.css';

class App extends Component {

  async componentDidMount() {
    const data = await DataCleaner.cleanMovieData(); 
    console.log(data)   
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
