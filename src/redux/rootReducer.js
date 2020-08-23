import { combineReducers } from 'redux';
import homeReducer from '../views/home/reducer.js';
import movieDetailsReducer from '../views/movies/reducer.js';
import searchReducer from '../views/nav/reducer.js';

const initialState = {
	main: homeReducer,
	details: movieDetailsReducer,
	search: searchReducer,
};

export default combineReducers(initialState);
