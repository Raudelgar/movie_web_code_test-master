import React from 'react';
import { Link } from 'react-router-dom';
import { Paper } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import './navBar.scss';

const useStyles = makeStyles((theme) => ({
	nav: {
		backgroundColor: theme.palette.primary.main,
		height: 115,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
}));

export default function NavBar() {
	const classes = useStyles();
	return (
		<header>
			<Paper className={classes.nav} square elevation={3}>
				<div className='nav-title-container'>
					<Link className='link' to='/' alt='The Movie List'>
						<h1 className='title'>My Movie DB</h1>
					</Link>
				</div>
			</Paper>
		</header>
	);
}
