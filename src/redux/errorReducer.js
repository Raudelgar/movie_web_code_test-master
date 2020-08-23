import { SEARCH_FAIL } from './errorAction';
import { CLEAR_SEARCH } from '../views/nav/actions';

export function searchFailReducer(state = false, { type, payload }) {
	switch (type) {
		case SEARCH_FAIL:
			return payload;
		case CLEAR_SEARCH:
			return false;
		default:
			return state;
	}
}
