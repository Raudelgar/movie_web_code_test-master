import { combineReducers } from 'redux';
import homeReducer from '../views/home/reducer.js';
import movieDetailsReducer from '../views/movies/reducer.js';
import { searchReducer, clearSearchReducer } from '../views/nav/reducer.js';
import { searchFailReducer } from './errorReducer.js';

const initialState = {
	main: homeReducer,
	details: movieDetailsReducer,
	search: searchReducer,
	clearSearch: clearSearchReducer,
	error: searchFailReducer,
};

export default combineReducers(initialState);
