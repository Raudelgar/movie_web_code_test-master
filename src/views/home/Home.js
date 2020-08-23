import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllMovies } from './actions.js';
import Card from '../cards/Card.js';
import { Link } from 'react-router-dom';
import queryString from 'query-string';

import './home.scss';

const renderSearch = (search, term) => {
	const result = search.length;
	return (
		<>
			<div className='home-title-container'>
				<h3 className='home-title'>{`${result} results for ${term}`}</h3>
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

const filterRender = (movies, search, term) => {
	if (search.length > 0) {
		return renderSearch(search, term);
	} else if (!movies.length) {
		return (
			<>
				<div className='home-title-container'>
					<h3 className='home-title'>All movies</h3>
				</div>
				<h2>Loading..</h2>
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
		const { movies, location } = this.props;
		const { filterMovies } = this.state;
		const parsed = queryString.parse(location.search);
		let term;
		if (parsed.q) {
			term = parsed.q;
		}

		return (
			<div className='home-container'>
				{filterRender(movies, filterMovies, term)}
			</div>
		);
	}
}

const mapStateToProps = ({ main, search }) => ({
	movies: main.movies,
	search,
});

const mapDispatchToProps = (dispatch) => ({
	getAllMovies: () => dispatch(getAllMovies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
