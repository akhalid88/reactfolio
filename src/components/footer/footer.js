import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BottomNavigation } from '@material-ui/core';

const useStyles = makeStyles({
	foot: {
		position: 'fixed',
		width: "100%",
		backgroundColor: '#282C34',
		color: '#C2C8E7',
		bottom: 0
	}
})

function Footer() {
	const classes = useStyles();
	return (
		<BottomNavigation className={classes.foot}>
			<h6>Portfolio designed by Muhammad A Khalid | Updated March 2021</h6>
		</BottomNavigation>
	);
};

export default Footer;