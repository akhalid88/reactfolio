import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Container } from '@material-ui/core';

const useStyles = makeStyles({
	main: {
		marginTop: "10%",
		// maxWidth: "50%",
	},
	title: {
		fontSize: 100,
		color: '#C2C8E7',
		textAlign: 'center'
	},
	text: {
		fontSize: 20,
		textAlign: 'center'
	}
})

function Home() {
	const classes = useStyles();
	return (
		<Container className={classes.main}>
			<div className={classes.text}>
				<h1 className={classes.title}>MUHAMMAD A KHALID</h1>
				<h5 className={classes.text}>Full Stack Web Developer</h5>
				<h5 className={classes.text}>archer | coder | gamer</h5>
			</div>
		</Container>
	);
}

export default Home;