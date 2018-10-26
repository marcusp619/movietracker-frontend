import { combineReducers } from 'redux';
import moviesReducer from  './movies-reducers';
import userReducer from './user-reducers';

const rootReducer = combineReducers({ movies: moviesReducer, user: userReducer });

export default rootReducer;
