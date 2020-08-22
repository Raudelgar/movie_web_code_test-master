import React from 'react';
import useHomeState from '../../hooks/useHomeState';

export default function Cards() {
	const movies = useHomeState();
	console.log(movies);
	if (!movies.length) {
		return <h2>Loading..</h2>;
	}
	return (
		<div>
			{movies.map((movie) => (
				<div key={movie.imdbId}>{movie.title}</div>
			))}
		</div>
	);
}
