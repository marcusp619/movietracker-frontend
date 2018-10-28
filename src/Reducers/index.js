import {combineReducers} from 'redux';
import moviesReducer from './movies-reducers';
import userReducer from './user-reducers';
import favoritesReducer from './fav-reducers';

const rootReducer = combineReducers({
  movies: moviesReducer,
  user: userReducer,
  favorites: favoritesReducer,
});

export default rootReducer;
