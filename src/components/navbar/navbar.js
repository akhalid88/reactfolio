import React from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Home from "../../pages/home";
import Portfolio from "../../pages/portfolio";
import About from "../../pages/about";
// import classes from '*.module.css';

const useStyles = makeStyles({
	navbar: {
		backgroundColor: '#282C34',
	}
})

function Navbar() {
	const classes = useStyles();
	return (
		<AppBar position="static" className={classes.navbar}>
			<Tabs aria-label="simple tabs example" centered>
				<Tab label="Home" value={Home} href="/" />
				<Tab label="Portfolio" value={Portfolio} href="/portfolio" />
				<Tab label="About" value={About} href="/about" />
			</Tabs>
		</AppBar>
	)
}

export default Navbar;