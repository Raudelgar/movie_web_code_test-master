import { combineReducers } from 'redux';
import homeReducer from '../views/home/reducer.js';

const initialState = {
	main: homeReducer,
};

export default combineReducers(initialState);
