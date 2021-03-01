import React, { useState } from 'react';
import { AppBar, Tabs, Tab, Button } from '@material-ui/core';
// import { TabPanel } from '@material-ui/lab';
import Home from "../../pages/home";
import Portfolio from "../../pages/portfolio";
import About from "../../pages/about";

function Navbar() {

	const [value, setValue] = useState("");
	// const onChange = 0;

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<AppBar position="static">
			<Tabs value={value} onChange={handleChange} aria-label="simple tabs example" centered>
				<Tab label="Home" value={Home} href="/" />
				<Tab label="Portfolio" value={Portfolio} href="/portfolio" />
				<Tab label="About" value={About} href="about" />
			</Tabs>
		</AppBar>
	)
}

export default Navbar;