import MoviesService from '../../services/movies.js';

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
	try {
		const movies = await MoviesService.getAllMovies();
		dispatch(dispatch(setMovies(movies)));
	} catch (error) {
		console.log(error);
	}
};
