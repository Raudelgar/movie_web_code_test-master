import axios from 'axios';
const API_KEY = process.env.REACT_APP_API_KEY;

const MoviesService = {
	getAllMovies: () =>
		axios.get('http://localhost:3001/movies/all').then((res) => res.data),
	fetchMovieByImdbId: (imdbId) =>
		axios
			.get(`http://www.omdbapi.com/?i=${imdbId}&apikey=${API_KEY}`)
			.then((res) => res.data),
	fetchMovieByTitle: (term) =>
		axios
			.get(`http://localhost:3001/movies/search?s=${term}`)
			.then((res) => res.data),
};

export default MoviesService;
