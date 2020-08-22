import { MOVIE_BY_IMDBID } from './actions';

export default (state = {}, { type, payload }) => {
	switch (type) {
		case MOVIE_BY_IMDBID:
			return {
				...state,
				...payload,
			};
		default:
			return state;
	}
};
