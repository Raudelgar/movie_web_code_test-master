import React, { useState } from 'react';
import { Paper } from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import './cards.scss';

const useStyles = makeStyles((theme) => ({
	cardPaper: {
		width: 225,
		height: 400,
		marginBottom: 20,
	},
}));

export default function Card({ poster, title }) {
	const classes = useStyles();
	const [imgSuccess, setIMgSuccess] = useState(true);

	const handleImageLoad = () => setIMgSuccess(true);
	const handleImageLoadError = () => setIMgSuccess(false);
	return (
		<Paper className={classes.cardPaper} elevation={3}>
			<div className='img-container'>
				<img
					className='poster'
					src={imgSuccess ? poster : title}
					alt={title}
					onLoad={handleImageLoad}
					onError={handleImageLoadError}
				/>
			</div>
			<div className='card-title-container'>
				<p>{title}</p>
			</div>
		</Paper>
	);
}

Card.propTypes = {
	poster: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};
