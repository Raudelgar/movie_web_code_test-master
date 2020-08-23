import React from 'react';

import './movieDetails.scss';
import { ReactComponent as ExclamationSVG } from '../../static/exclamation.svg';

export default function MoviesDetailsFail() {
	return (
		<div className='movie-detials-container-error'>
			<h3 className='movie-detials-error-msg'>Oops, something went wrong!</h3>
			<div className='movie-detials-error-svg'>
				<ExclamationSVG />
			</div>
		</div>
	);
}
