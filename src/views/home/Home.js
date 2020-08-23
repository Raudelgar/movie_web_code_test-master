import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllMovies } from './actions.js';
import Card from '../cards/Card.js';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import MUILinearProgress from '../../components/loaders/MUILinearProgress.js';
import noResultSVG from '../../static/no_results.svg';

import './home.scss';

const renderSearch = (search, term) => {
	const result = search.length;
	return (
		<>
			<div className='home-title-container'>
				<h3 className='home-title'>{`${result} results for "${term}"`}</h3>
			</div>
			<div className='cards-grid-container'>
				{search.map(({ id, imdbId, poster, releaseDate, title }) => (
					<div key={imdbId} className='card-grid-item'>
						<Link
							className='card-link'
							to={{
								pathname: `/${id}`,
								state: { imdbId },
							}}
						>
							<Card poster={poster} title={title} />
						</Link>
					</div>
				))}
			</div>
		</>
	);
};

const filterRender = (movies, search, term, clearSearch) => {
	if (search.length > 0 && !clearSearch) {
		return renderSearch(search, term);
	} else if (!movies.length) {
		return (
			<>
				<div className='home-title-container'>
					<h3 className='home-title'>All movies</h3>
				</div>
				<MUILinearProgress />
			</>
		);
	}
	return (
		<>
			<div className='home-title-container'>
				<h3 className='home-title'>All movies</h3>
			</div>
			<div className='cards-grid-container'>
				{movies.map(({ id, imdbId, poster, releaseDate, title }) => (
					<div key={imdbId} className='card-grid-item'>
						<Link
							className='card-link'
							to={{
								pathname: `/${id}`,
								state: { imdbId },
							}}
						>
							<Card poster={poster} title={title} />
						</Link>
					</div>
				))}
			</div>
		</>
	);
};

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filterMovies: [],
		};
	}

	componentDidMount() {
		this.props.getAllMovies();
	}

	componentDidUpdate(prevProps) {
		if (this.props.search.length !== prevProps.search.length) {
			this.setState({ filterMovies: this.props.search });
		}
	}

	render() {
		const { movies, location, clearSearch, error } = this.props;
		const { filterMovies } = this.state;
		const parsed = queryString.parse(location.search);
		let term;
		if (parsed.q) {
			term = parsed.q;
		}

		return (
			<div className='home-container'>
				{error && (
					<div>
						<img src={noResultSVG} alt='No Results' />
					</div>
				)}
				{!error && filterRender(movies, filterMovies, term, clearSearch)}
			</div>
		);
	}
}

const mapStateToProps = ({ main, search, clearSearch, error }) => ({
	movies: main.movies,
	search,
	clearSearch,
	error,
});

const mapDispatchToProps = (dispatch) => ({
	getAllMovies: () => dispatch(getAllMovies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
