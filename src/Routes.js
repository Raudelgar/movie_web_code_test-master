import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';

import App from './components/main/App.js';
import Content from './components/content/Content.js';

import Home from './views/home/Home.js';
import NavBar from './views/nav/NavBar.js';

const Routes = (routeProps) => (
	<App location={routeProps.location}>
		<NavBar />
		<Content>
			<Switch>
				<Route exact path='/' component={Home} />
			</Switch>
		</Content>
	</App>
);

export default withRouter(Routes);
