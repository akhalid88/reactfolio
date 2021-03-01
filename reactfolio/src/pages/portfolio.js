import { Grid } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import Project from "../components/project/project"
import projects from "../projects.json";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	proj: {
		marginTop: 100,
		justifyContent: 'center'
	}
});

function Portfolio() {

	const [projectState, setProjectState] = useState([]);
	const classes = useStyles();

	useEffect(() => {
		setProjectState(projects);
	})

	return (
		<div className={classes.container}>
			<Grid container alignItems="stretch" className={classes.proj}>
				{projectState.map(proj => (
					<Project
						key={proj.id}
						name={proj.name}
						description={proj.description}
						image={proj.image}
						deploy={proj.deploy}
						github={proj.github}
					/>
				))}
			</Grid>
		</div>
	);
}

export default Portfolio;