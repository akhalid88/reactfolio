import React, { useState } from 'react';
import { AppBar, Tabs, Tab, Button } from '@material-ui/core';
// import { TabPanel } from '@material-ui/lab';
import Home from "../../pages/home";
import Portfolio from "../../pages/portfolio";
import About from "../../pages/about";

function Navbar() {

	const [value, setValue] = useState("");
	const onChange = 0;


	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<AppBar position="static">
			<Tabs value={value} onChange={handleChange} aria-label="simple tabs example" centered>
				<Tab label="Home" value={Home} />
				<Tab label="Portfolio" value={Portfolio} />
				<Tab label="About" value={About} />
			</Tabs>
		</AppBar>
	)
}

export default Navbar;