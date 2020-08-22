import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';

import App from './components/App';

import Home from './views/home/Home.js';
import NavBar from './views/nav/NavBar.js';

const Routes = (routeProps) => (
	<App location={routeProps.location}>
		<NavBar />
		<Switch>
			<Route exact path='/' component={Home} />
		</Switch>
	</App>
);

export default withRouter(Routes);
