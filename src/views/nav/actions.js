import MoviesService from '../../services/movies.js';

export const SEARCH_BY_TITLE = 'SEARCH_BY_TITLE';
export const CLEAR_SEARCH = 'CLEAR_SEARCH';
export const SEARCH_FAIL = 'SEARCH_FAIL';

function setMovieTitle(movies) {
	return {
		type: SEARCH_BY_TITLE,
		payload: movies,
	};
}

export const getMovieByTitle = (title) => async (dispatch) => {
	dispatch(searchFail(false));
	try {
		const movies = await MoviesService.fetchMovieByTitle(title);
		dispatch(setMovieTitle(movies));
	} catch (error) {
		console.log(error);
		dispatch(searchFail(true));
	}
};

export function clearSearch() {
	return {
		type: CLEAR_SEARCH,
	};
}

export function searchFail(bool) {
	return {
		type: SEARCH_FAIL,
		payload: bool,
	};
}
