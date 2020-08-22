import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllMovies } from './actions.js';
import Card from '../cards/Card.js';
import { Link } from 'react-router-dom';

import './home.scss';

const filterRender = (movies) => {
	if (!movies.length) {
		return <h2>Loading..</h2>;
	}
	return (
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
	);
};

class Home extends Component {
	componentDidMount() {
		this.props.getAllMovies();
	}

	render() {
		const { movies } = this.props;
		return (
			<div className='home-container'>
				<div className='home-title-container'>
					<h3 className='home-title'>All movies</h3>
				</div>
				{filterRender(movies)}
			</div>
		);
	}
}

const mapStateToProps = ({ main }) => ({
	movies: main.movies,
});

const mapDispatchToProps = (dispatch) => ({
	getAllMovies: () => dispatch(getAllMovies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
