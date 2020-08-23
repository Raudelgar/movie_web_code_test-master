import { SEARCH_BY_TITLE } from './actions';

export default (state = [], { type, payload }) => {
	switch (type) {
		case SEARCH_BY_TITLE:
			return payload;
		default:
			return state;
	}
};
