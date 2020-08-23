import { SEARCH_BY_TITLE, CLEAR_SEARCH } from './actions';

export function searchReducer(state = [], { type, payload }) {
	switch (type) {
		case SEARCH_BY_TITLE:
			return payload;
		default:
			return state;
	}
}

export function clearSearchReducer(state = true, { type }) {
	switch (type) {
		case SEARCH_BY_TITLE:
			return false;
		case CLEAR_SEARCH:
			return true;
		default:
			return state;
	}
}
