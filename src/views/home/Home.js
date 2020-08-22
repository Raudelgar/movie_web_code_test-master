import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { getAllMovies } from '../../redux/actions';
import { getAllMovies } from './actions.js';

import './home.scss';
import Cards from '../cards/Cards.js';

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
				<Cards />
			</div>
		);
	}
}

// const mapStateToProps = ({ main }) => ({
// 	movies: main.movies,
// });

const mapDispatchToProps = (dispatch) => ({
	getAllMovies: () => dispatch(getAllMovies()),
});

export default connect(null, mapDispatchToProps)(Home);
