import React, { Component } from 'react';
import * as API from '../../Utils/API/';

class Favorites extends Component {
  componentDidMount() {

  }

  render() {
    return (<div></div>)
  }
}

const mapStateToProps = (state) => {
  favorites: state.favorites,
}

const mapDispatchToProps = (dispatch) => {

}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)