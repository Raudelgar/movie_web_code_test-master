import React, { useRef } from 'react';
import { Paper } from '@material-ui/core';
import defaultPoster from '../../static/poster_placeholder.svg';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import './cards.scss';

const useStyles = makeStyles((theme) => ({
	cardPaper: {
		width: 225,
		height: 400,
		marginBottom: 20,
		'&:hover': {
			boxShadow:
				'0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgb(153, 231, 208)',
		},
	},
}));

export default function Card({ poster, title }) {
	const classes = useStyles();
	const imgRef = useRef();

	const handleImageLoadError = () => (imgRef.current.src = defaultPoster);
	return (
		<Paper className={classes.cardPaper} elevation={0}>
			<div className='img-container'>
				<img
					ref={imgRef}
					className='poster'
					src={poster}
					alt={title}
					onError={handleImageLoadError}
				/>
			</div>
			<div className='card-title-container'>
				<p className='card-title'>{title}</p>
			</div>
		</Paper>
	);
}

Card.propTypes = {
	poster: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};
