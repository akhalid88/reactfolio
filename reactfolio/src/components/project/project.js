import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
	media: {
		height: 100,
		width: 100,
	}
});

function Project() {
	const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
			{/* <CardMedia 
        className={classes.media}
        image="./images/c19tracker.png"
        title="COVID 19 Tracker"
      /> */}
			<img src="/images/c19tracker.png" alt="covid19tracker" />
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          COVID 19 Tracker
        </Typography>
        <Typography variant="body2" component="p">
				Get data on COVID-19 for given state and nearby testing locations. Utilizes Web APIs, ChartJS, and Bulma CSS
        </Typography>
			</CardContent>
      <CardActions>
        <Button size="small">View Website</Button>
        <Button size="small">View on GitHub</Button>
      </CardActions>
    </Card>
  );
}

export default Project;