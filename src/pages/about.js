import React from 'react';
import { Container, Grid, Paper, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import GetAppIcon from '@material-ui/icons/GetApp';

const useStyles = makeStyles({
	gridCont: {
		marginTop: 50,
		padding: 20,
	},
	paper: {
		paddingTop: 5,
		padding: 20,
		margin: 5,
	},
	links: {
		display: 'inline-block',
		padding: 20,
		alignItems: 'justify',
		alignContent: 'justify',
		width: '100%',
		backgroundColor: 'transparent'
	},
	buttons: {
		margin: 80,
		marginTop: 50,
		alignContent: 'center',
		paddingLeft: 25,
		paddingRight: 25,
		paddingTop: 20,
		paddingBottom: 20
	},
	skillCont: {
		paddingTop: 5,
		padding: 20,
		margin: 5,
		width: "100%"
	},
	skills: {
		padding: 5,
		margin: 4,
		verticalAlign: 'middle',
		display: 'inline-block',
		backgroundColor: 'transparent',
	},
	resume: {
		display: 'flex',
		justifyContent: 'center',
	}
});

function About() {
	const classes = useStyles();
	return (
		<Container className={classes.gridCont}>
			<Grid container alignItems="stretch">
				<Grid item className={classes.gridItem}>
					<Paper className={classes.paper}>
						<div className="callout aboutme">
							<h5 className="textarea">About Me</h5>
							<p>Hello there, I am an aspiring web developer residing in California's Bay Area. I build websites and
								apps for the modern world.</p>
							<p>I've been working in tech support most of my life and one day realized it was time for a career change, so I
								decided it was time to change tracks and now I'm here making amazing sites and apps and having fun all the
								while.</p>
							<p>When I'm not working on code, I can be found at at an archery range, board gaming with friends, or in the kitchen whipping up something
								amazing.</p>
							<div className={classes.resume}>
								<Button variant="contained" color="primary" href="/images/MuhammadAKhalid-resume.pdf" centered download endIcon={<GetAppIcon />}>It's dangerous to go alone, take this resume</Button>
							</div>
						</div>
					</Paper>
				</Grid>
			</Grid>

			<Grid container alignItems="stretch" className={classes.gridCont}>
				<Grid item className={classes.skillCont}>
					<Paper className={classes.paper}>
						<h5 className="textarea">Skills</h5>
						<Grid className={classes.skills}>
							<Paper elevation={1} className={classes.paper}>React JS</Paper>
							<Paper elevation={3} className={classes.paper}>Javascript</Paper>
							<Paper elevation={5} className={classes.paper}>MERN</Paper>
						</Grid>
						<Grid className={classes.skills}>
							<Paper elevation={1} className={classes.paper}>jQuery</Paper>
							<Paper elevation={3} className={classes.paper}>HTML/ES6</Paper>
							<Paper elevation={5} className={classes.paper}>Node JS</Paper>
						</Grid>
						<Grid className={classes.skills}>
							<Paper elevation={1} className={classes.paper}>Bootstrap CSS</Paper>
							<Paper elevation={3} className={classes.paper}>Foundation CSS</Paper>
							<Paper elevation={5} className={classes.paper}>Bulma CSS</Paper>
						</Grid>
						<Grid className={classes.skills}>
							<Paper elevation={1} className={classes.paper}>Express</Paper>
							<Paper elevation={3} className={classes.paper}>mySQL</Paper>
							<Paper elevation={5} className={classes.paper}>MongoDB</Paper>
						</Grid>
						<Grid className={classes.skills}>
							<Paper elevation={1} className={classes.paper}>Mongoose</Paper>
							<Paper elevation={3} className={classes.paper}>Sequelize</Paper>
							<Paper elevation={5} className={classes.paper}>Handlebars</Paper>
						</Grid>
						<Grid className={classes.skills}>
							<Paper elevation={1} className={classes.paper}>Data structures</Paper>
							<Paper elevation={3} className={classes.paper}>Responsive design</Paper>
							<Paper elevation={5} className={classes.paper}>RESTful APIs</Paper>
						</Grid>
						<Grid className={classes.skills}>
							<Paper elevation={1} className={classes.paper}>Git/GitHub</Paper>
							<Paper elevation={3} className={classes.paper}>Heroku</Paper>
							<Paper elevation={5} className={classes.paper}>MongoDB</Paper>
						</Grid>
					</Paper>
				</Grid>
			</Grid>

			<Grid container alignItems="stretch" className={classes.links}>
				<Grid item className={classes.links}>
					<Button className={classes.buttons} variant="contained" color="primary" startIcon={<EmailIcon />} href="mailto:akhalid.code@gmail.com">Email</Button>
					<Button className={classes.buttons} variant="contained" color="primary" startIcon={<LinkedInIcon />} href="https://www.linkedin.com/in/abdullahkhalid/">LinkedIn</Button>
					<Button className={classes.buttons} variant="contained" color="primary" startIcon={<GitHubIcon />} href="https://github.com/akhalid88">GitHub</Button>
					<Button className={classes.buttons} variant="contained" color="primary" startIcon={<AnnouncementIcon />} href="https://akhalid-code.medium.com/">Medium</Button>
				</Grid>
			</Grid>

		</Container>
	);
}

export default About;