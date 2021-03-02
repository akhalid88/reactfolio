import React from "react";

const ProjectContext = React.createContext({
	id: 0,
	name: "",
	description: "",
	image: "",
	deploy: "",
	github: ""
});

export default ProjectContext;
