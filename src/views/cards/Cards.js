import React from 'react';
import useHomeState from '../../hooks/useHomeState';
import Card from './Card.js';

export default function Cards() {
	const movies = useHomeState();
	console.log(movies);
	if (!movies.length) {
		return <h2>Loading..</h2>;
	}
	return (
		<div className='cards-grid-container'>
			{movies.map(({ id, imdbId, poster, releaseDate, title }) => (
				<div key={imdbId} className='card-grid-item'>
					<Card poster={poster} title={title} />
				</div>
			))}
		</div>
	);
}
