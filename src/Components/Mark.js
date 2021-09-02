import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 0,
    width: "100%",
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  cardheader: {
    fontFamily: "Mina",
    color: "#4399b5",
  },
  cardtext: {
    textAlign: "justify",
  }
}));

export default function Mark() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader className={classes.cardheader}
        title="Mark and Tina Salisbury"
      />
      <CardMedia
        className={classes.media}
        image="mark.png"
        title="Paella dish"
      />
      <CardContent>
        <Typography className={classes.cardtext} variant="body2" color="textSecondary" component="p">
        Mark & Tina felt a call to ministry while living in Auckland in the 90’s, so they jumped on a plane with their two girls and embarked on an adventure in the USA that led them to discover their Vineyard Tribe. They trained at Pathway Vineyard in Maine and during that time felt called back to Tauranga, New Zealand to plant a Vineyard Church. 
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography className={classes.cardtext} paragraph>
          Mark & Tina have led Journey Vineyard since it’s beginning in 2011. They have a passion for people of all ages and from all walks of life to come as they are and feel welcome; to become part of the Journey whanau, become life-long followers of Jesus and have their lives transformed by His. 

They believe that God has given Journey Vineyard an assignment alongside the other churches of Tauranga to be a part of the redemptive history of this city. To love God and love people. To be a safe and welcoming place for people to encounter the love of God, wherever they may be on their spiritual journey.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}