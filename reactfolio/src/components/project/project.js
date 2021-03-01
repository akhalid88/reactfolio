import { makeStyles } from '@material-ui/core/styles';
import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Grid,
	Typography
} from '@material-ui/core';

const useStyles = makeStyles({
	grid: {
		margin: 75,
	},
	root: {
		minWidth: 400,
		maxWidth: 500,
		height: "100%",
		width: "100%",
		display: 'inline-block'
	},
	title: {
		fontSize: 20,
	},
	pos: {
		marginBottom: 12,
	},
	media: {
		height: 400,
		width: 500,
	},
	links: {
		display: 'relative',
		position: 'relative'
	}
});

function Project({ id, name, description, image, deploy, github }) {
	const classes = useStyles();
	// const bull = <span className={classes.bullet}>•</span>;

	return (
		<Grid item component={Card} className={classes.grid}>
			<Card className={classes.root}>
				<CardMedia
					className={classes.media}
					image={image}
					title="COVID 19 Tracker"
				/>
				{/* <img src={image} alt={name} /> */}
				<CardContent>
					<Typography className={classes.title} color="textSecondary" gutterBottom>
						{name}
					</Typography>
					<Typography variant="body2" component="p">
						{description}
					</Typography>
				</CardContent>
				<CardActions className={classes.links}>
					<Button size="small" href={deploy}>View Website</Button>
					<Button size="small" href={github}>View on GitHub</Button>
				</CardActions>
			</Card>
		</Grid>
	);
}

export default Project;