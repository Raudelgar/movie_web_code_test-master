import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const middlewares = [thunk];
// const composeEnhancers =
// 	(window.__REDUX_DEVTOOLS_EXTENSION__ &&
// 		window.__REDUX_DEVTOOLS_EXTENSION__()) ||
// 	compose;

export default applyMiddleware(...middlewares);
