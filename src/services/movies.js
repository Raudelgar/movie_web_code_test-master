const API_KEY = process.env.REACT_APP_API_KEY;

const MoviesService = {
	getAllMovies: () =>
		fetch('http://localhost:3001/movies/all').then(function (response) {
			return response.json();
		}),
	fetchMovieByImdbId: (imdbId) =>
		fetch(`http://www.omdbapi.com/?i=${imdbId}&apikey=${API_KEY}`).then(
			function (response) {
				return response.json();
			}
		),
	fetchMovieByTitle: (term) =>
		fetch(`http://localhost:3001/movies/search?s=${term}`).then(function (
			response
		) {
			return response.json();
		}),
};

export default MoviesService;
