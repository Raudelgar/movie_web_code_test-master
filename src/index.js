import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.scss';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import muiTheme from './muiTheme.js';

import configureStore from './redux';
import Routes from './Routes';

ReactDOM.render(
	<Provider store={configureStore()}>
		<CssBaseline>
			<ThemeProvider theme={muiTheme}>
				<Router>
					<Routes />
				</Router>
			</ThemeProvider>
		</CssBaseline>
	</Provider>,
	document.getElementById('root')
);
