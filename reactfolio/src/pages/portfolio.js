import React from 'react';
import Project from "../components/project/project"
import projects from "../projects.json" 

function Portfolio() {
	return (
		<div>
			{projects.map(proj => (
				<Project />
			))}
		</div>
	);
}

export default Portfolio;