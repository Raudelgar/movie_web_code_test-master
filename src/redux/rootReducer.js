import { combineReducers } from 'redux';
import homeReducer from '../views/home/reducer.js';
import movieDetailsReducer from '../views/movies/reducer.js';
import {
	searchReducer,
	clearSearchReducer,
	searchFailReducer,
} from '../views/nav/reducer.js';

const initialState = {
	main: homeReducer,
	details: movieDetailsReducer,
	search: searchReducer,
	clearSearch: clearSearchReducer,
	error: searchFailReducer,
};

export default combineReducers(initialState);
