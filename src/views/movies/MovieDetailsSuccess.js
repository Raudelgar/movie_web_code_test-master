import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import defaultPoster from '../../static/poster_placeholder.svg';

import './movieDetails.scss';

export default function MoviesDetailsSuccess({ details, imdbId }) {
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
	const imgRef = useRef();

	const handleImageLoadError = () => (imgRef.current.src = defaultPoster);
	return (
		<div className='movie-detials-container'>
			<div className='movie-details-img-container'>
				<img
					className='movie-details-img'
					src={Poster}
					alt={Title}
					onError={handleImageLoadError}
				/>
			</div>
			<div className='movie-details-desc-container'>
				<div className='movie-details-desc-header'>
					<div className='movie-details-desc-header-name'>
						<h3>{`${Title} - (${Year})`}</h3>
						<span className='movie-details-desc-header-span'>{`${Rated} | ${Runtime} | ${Genre} | ${Released}`}</span>
					</div>
					<div className='movie-details-desc-header-rate'>
						<h3 className='movie-details-desc-rate'>{`${imdbRating} / 10`}</h3>
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
	);
}

MoviesDetailsSuccess.propTypes = {
	details: PropTypes.object.isRequired,
	imdbId: PropTypes.string.isRequired,
};
