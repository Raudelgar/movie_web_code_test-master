import React from 'react';
import { Paper } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import './cards.scss';

const useStyles = makeStyles((theme) => ({
	paper: {
		width: 225,
		height: 400,
		marginBottom: 20,
	},
}));

export default function Card({ poster, title }) {
	const classes = useStyles();
	return (
		<Paper className={classes.paper} elevation={3}>
			<div className='img-container'>
				<img className='poster' src={poster} alt='movie' />
			</div>
			<p>{title}</p>
		</Paper>
	);
}
