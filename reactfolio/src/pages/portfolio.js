import { Container } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import Project from "../components/project/project"
import projects from "../projects.json";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	proj: {
		display: 'inline-block',
		marginTop: 100,
		
	}
})


function Portfolio() {

	const [projectState, setProjectState] = useState([]);
	const classes = useStyles();

	useEffect(() => {
		setProjectState(projects);
	})

	return (
		<div>
			<Container className={classes.proj}>
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
			</Container>
		</div>
	);
}

export default Portfolio;