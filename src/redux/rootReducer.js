import { combineReducers } from 'redux';
import homeReducer from '../views/home/reducer.js';
import movieDetailsReducer from '../views/movies/reducer.js';

const initialState = {
	main: homeReducer,
	details: movieDetailsReducer,
};

export default combineReducers(initialState);
