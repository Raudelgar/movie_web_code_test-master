import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
	palette: {
		primary: {
			main: '#99e7d0',
		},
	},
	typography: {
		fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
	},
	overrides: {
		MuiLinearProgress: {
			colorPrimary: {
				backgroundColor: '#1ba8ea',
			},
			barColorPrimary: {
				backgroundColor: '#B2DFDB',
			},
		},
	},
});
