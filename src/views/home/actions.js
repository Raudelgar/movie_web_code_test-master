import MoviesService from '../../services/movies.js';
import { searchFail } from '../../redux/errorAction.js';

export const ALL_MOVIES_LOADED = 'ALL_MOVIES_LOADED';

function setMovies(movies) {
	return {
		type: ALL_MOVIES_LOADED,
		payload: {
			movies,
		},
	};
}

export const getAllMovies = () => async (dispatch) => {
	dispatch(searchFail(false));
	try {
		const movies = await MoviesService.getAllMovies();
		dispatch(setMovies(movies));
	} catch (error) {
		dispatch(searchFail(true));
	}
};
