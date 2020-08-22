import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import useMoviesDetailsState from '../../hooks/useMovieDetailsState.js';
import { getMovieByImdbId } from './actions';

import './movieDetails.scss';

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
		console.log(details.current);
		console.log(history);
		const {
			Poster,
			Title,
			Plot,
			Director,
			Writer,
			Year,
			Rated,
			Runtime,
			Genre,
			Released,
			Actors,
			imdbRating,
		} = details.current;
		return (
			<>
				<div className='btn-back-container'>
					<button className='btn-back' onClick={handleGoBack}>
						Back To Results
					</button>
				</div>
				<div className='movie-detials-container'>
					<div className='movie-details-img-container'>
						<img className='movie-details-img' src={Poster} />
					</div>
					<div className='movie-details-desc-container'>
						<div className='movie-details-desc-header'>
							<div className='movie-details-desc-header-name'>
								<h3>{`${Title} - (${Year})`}</h3>
								<span className='movie-details-desc-header-span'>{`${Rated} | ${Runtime} | ${Genre} | ${Released}`}</span>
							</div>
							<div className='movie-details-desc-header-rate'>
								<h3 className='movie-details-desc-rate'>{`${imdbRating}/10`}</h3>
							</div>
						</div>
						<div className='movie-details-desc'>
							<p className='movie-details-desc-title'>Plot</p>
							<p className='movie-details-desc-body'>{Plot}</p>
						</div>
						<div className='movie-details-desc'>
							<p className='movie-details-desc-title'>Directors</p>
							<p className='movie-details-desc-body'>{Director}</p>
						</div>
						<div className='movie-details-desc'>
							<p className='movie-details-desc-title'>Writers</p>
							<p className='movie-details-desc-body'>{Writer}</p>
						</div>
						<div className='movie-details-desc'>
							<p className='movie-details-desc-title'>Actors</p>
							<p className='movie-details-desc-body'>{Actors}</p>
						</div>
						<div className='movie-details-desc'>
							<p className='movie-details-desc-title'>IMDB ID</p>
							<p className='movie-details-desc-body'>{imdbId}</p>
						</div>
					</div>
				</div>
			</>
		);
	}
}
