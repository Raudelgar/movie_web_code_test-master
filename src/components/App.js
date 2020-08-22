import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './app.scss';
import NavBar from './nav/NavBar';

class App extends Component {
	render() {
		return (
			<div className='app'>
				<NavBar />
				{this.props.children}
			</div>
		);
	}
}

export default App;
