import { createStore, compose } from 'redux';
import rootReducer from './rootReducer.js';
import middlewares from '../middleware/middleware.js';

export default function configureStore() {
	return createStore(
		rootReducer,
		compose(
			middlewares,
			window.__REDUX_DEVTOOLS_EXTENSION__ &&
				window.__REDUX_DEVTOOLS_EXTENSION__()
		)
	);
}
