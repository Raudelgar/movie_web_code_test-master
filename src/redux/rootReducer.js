import { combineReducers } from 'redux';
import homeReducer from '../views/home/reducer.js';
import movieDetailsReducer from '../views/movies/reducer.js';
import { searchReducer, clearSearchReducer } from '../views/nav/reducer.js';

const initialState = {
	main: homeReducer,
	details: movieDetailsReducer,
	search: searchReducer,
	clearSearch: clearSearchReducer,
};

export default combineReducers(initialState);
