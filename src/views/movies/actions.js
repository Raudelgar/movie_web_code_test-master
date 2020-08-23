import MoviesService from '../../services/movies.js';

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
	try {
		const movie = await MoviesService.fetchMovieByImdbId(imdbId);
		dispatch(setMovieByImdbId(imdbId, movie));
	} catch (error) {
		console.log(error);
	}
};
