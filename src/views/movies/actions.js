import MoviesService from '../../services/movies.js';
import { searchFail } from '../../redux/errorAction.js';

export const MOVIE_BY_IMDBID = 'MOVIE_BY_IMDBID';

function setMovieByImdbId(id, movie) {
	return {
		type: MOVIE_BY_IMDBID,
		payload: {
			[id]: movie,
		},
	};
}

export const getMovieByImdbId = (imdbId) => async (dispatch) => {
	dispatch(searchFail(false));
	try {
		const movie = await MoviesService.fetchMovieByImdbId(imdbId);
		dispatch(setMovieByImdbId(imdbId, movie));
	} catch (error) {
		dispatch(searchFail(true));
	}
};
