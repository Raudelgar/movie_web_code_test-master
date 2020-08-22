import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { getAllMovies } from '../../redux/actions';
import { getAllMovies } from './actions.js';

import './home.scss';

class Home extends Component {
	componentDidMount() {
		this.props.getAllMovies();
	}

	render() {
		return (
			<div className='home-container'>
				<div className='home-title-container'>
					<h3 className='home-title'>All movies</h3>
				</div>
				{this.props.movies.map((movie) => (
					<div key={movie.imdbId}>{movie.title}</div>
				))}
			</div>
		);
	}
}

const mapStateToProps = (state) =>
	console.log(state) || {
		movies: state.main.movies,
	};

const mapDispatchToProps = (dispatch) => ({
	getAllMovies: () => dispatch(getAllMovies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
