import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import useMoviesDetailsState from '../../hooks/useMovieDetailsState.js';
import { getMovieByImdbId } from './actions';
import MovieDetailsSuccess from './MovieDetailsSuccess.js';

import './movieDetails.scss';
import MoviesDetailsFail from './MovieDetailsFail.js';

export default function MoviesDetails({ location, history }) {
	const { imdbId } = location.state;
	const detailsState = useMoviesDetailsState();
	const dispatch = useDispatch();
	const details = useRef(null);

	useEffect(() => {
		if (!detailsState[imdbId]) {
			dispatch(getMovieByImdbId(imdbId));
		}
	}, [detailsState]);

	const handleGoBack = () => history.push('/');

	details.current = detailsState[imdbId];

	if (!details.current) {
		return <h2>Loading..</h2>;
	} else {
		const { Title, Plot, imdbRating } = details.current;
		if (!Title || !Plot || !imdbRating) {
			return (
				<>
					<div className='btn-back-container'>
						<button className='btn-back' onClick={handleGoBack}>
							Back To Results
						</button>
					</div>
					<MoviesDetailsFail />
				</>
			);
		} else {
			const attrs = {
				details,
				imdbId,
			};
			return (
				<>
					<div className='btn-back-container'>
						<button className='btn-back' onClick={handleGoBack}>
							Back To Results
						</button>
					</div>
					<MovieDetailsSuccess {...attrs} />
				</>
			);
		}
	}
}
