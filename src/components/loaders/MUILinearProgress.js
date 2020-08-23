import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		'& > * + *': {
			marginTop: theme.spacing(2),
		},
		position: 'absolute',
		top: 0,
		left: '-1px',
	},
}));

export default function MUILinearProgress() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<LinearProgress />
		</div>
	);
}
