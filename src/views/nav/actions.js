import MoviesService from '../../services/movies.js';

export const SEARCH_BY_TITLE = 'SEARCH_BY_TITLE';

function setMovieTitle(movies) {
	return {
		type: SEARCH_BY_TITLE,
		payload: movies,
	};
}

export const getMovieByTitle = (title) => async (dispatch) => {
	try {
		const movies = await MoviesService.fetchMovieByTitle(title);
		dispatch(setMovieTitle(movies));
	} catch (error) {
		console.log(error);
	}
};
