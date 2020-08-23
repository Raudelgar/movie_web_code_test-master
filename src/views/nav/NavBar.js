import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Paper } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import useDebounceHook from '../../hooks/useDebounceHook.js';
import { useDispatch } from 'react-redux';
import { getMovieByTitle } from './actions.js';

import { makeStyles } from '@material-ui/core/styles';
import './navBar.scss';

const useStyles = makeStyles((theme) => ({
	nav: {
		backgroundColor: theme.palette.primary.main,
		height: 115,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 5,
	},
}));

export default function NavBar() {
	const classes = useStyles();
	const history = useHistory();
	const [searchTxt, setSearchTxt] = useState('');
	const dispatch = useDispatch();

	// const debounceSearch = useDebounceHook(
	// 	(txt) => dispatch(getMovieByTitle(txt)),
	// 	200
	// );

	// useEffect(() => {
	// 	if (searchTxt.trim() !== '') {
	// 		debounceSearch(searchTxt);
	// 	}
	// }, [searchTxt, debounceSearch]);

	const hanldeSearch = (e) => {
		if (e.key === 'Enter' && searchTxt.trim() !== '') {
			dispatch(getMovieByTitle(searchTxt));
		}
	};

	const handleRedirect = (term) => {
		if (term.trim() !== '') {
			return history.push({
				search: `?q=${term}`,
			});
		} else {
			return history.push('/');
		}
	};

	const handleOnChange = (e) => {
		e.preventDefault();
		const value = e.target.value;
		setSearchTxt(value);
		handleRedirect(value);
	};

	return (
		<header>
			<Paper className={classes.nav} square elevation={3}>
				<div className='nav-title-container'>
					<Link className='link' to='/' alt='The Movie List'>
						<h1 className='title'>My Movie DB</h1>
					</Link>
					<input
						className='search-input'
						type='text'
						name='search'
						placeholder='Search movies by title'
						value={searchTxt}
						onChange={handleOnChange}
						onKeyPress={hanldeSearch}
					/>
				</div>
			</Paper>
		</header>
	);
}
