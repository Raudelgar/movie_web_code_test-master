import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllMovies } from '../../redux/actions';

class Home extends Component {
	componentDidMount() {
		this.props.getAllMovies();
	}

	render() {
		return (
			<div>
				{this.props.movies.map((movie) => (
					<div key={movie.imdbId}>{movie.title}</div>
				))}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	movies: state.main.movies,
});

const mapDispatchToProps = (dispatch) => ({
	getAllMovies: () => dispatch(getAllMovies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
