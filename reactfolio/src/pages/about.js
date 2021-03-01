import React from 'react';
import { Container, Grid, Paper, Button, Icon } from '@material-ui/core';
// import { EmailIcon, MailOutlineIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import AnnouncementIcon from '@material-ui/icons/Announcement';

const useStyles = makeStyles({
	gridCont: {
		// margin: 20,
		padding: 20
	},
	gridItems: {
		// marginTop: 20,
		// padding: 10
	},
	paper: {
		paddingTop: 5,
		padding: 20
	}
});

function About() {
	const classes = useStyles();
	return (
		<Container>
			<Grid container alignItems="stretch" className={classes.gridCont}>

				<Grid item className={classes.gridItem}>
					<Paper className={classes.paper}>
						<div className="callout aboutme">
							<h5 className="textarea">About Me</h5>
							<p>My name is Muhammad. I am an aspiring web developer residing in California's Bay Area. I build websites and
								apps for the modern world.</p>
							<p>I've been working in tech support most of my life and one day realized it was time for a career change, so I
							decided it was time to change tracks and now I'm here making amazing sites and apps and having fun all the
								while.</p>
							<p>When I'm not working on code, I can be found at at an archery range or in the kitchen whipping up something
								amazing.</p>
							<a href="/images/MuhammadAKhalid-resume.pdf" className="resume" role="button" download>
								It's dangerous to go alone, take this (resume)
								<span>
									<i class="fas fa-file-download fa-2x"></i>
								</span>
							</a>
						</div>
					</Paper>
				</Grid>
			</Grid>

			<Grid container alignItems="stretch" className={classes.gridCont}>
				<Grid item>
					<Paper className={classes.paper}>
						<div className="callout aboutme">
							<h5 className="textarea">Skills</h5>
						</div>
					</Paper>
				</Grid>
			</Grid>

			<Grid container alignItems="stretch" className={classes.gridCont}>
				<Grid item component={Paper}>
					<Paper elevation={3} className={classes.paper}>About</Paper>
					<Paper elevation={3} className={classes.paper}>About</Paper>
					<Paper elevation={3} className={classes.paper}>About</Paper>
				</Grid>
			</Grid>
			
			<Grid container alignItems="stretch" className={classes.gridCont}>
				<Grid item component={Paper}>
					<Button variant="contained" color="secondary" startIcon={<SaveIcon />}>Email</Button>
					<Button variant="contained" color="secondary" startIcon={<LinkedInIcon />}>LinkedIn</Button>
					<Button variant="contained" color="secondary" startIcon={<GitHubIcon />}>GitHub</Button>
					<Button variant="contained" color="secondary" startIcon={<AnnouncementIcon />}>Medium</Button>
				</Grid>
			</Grid>

		</Container>
	);
}

export default About;