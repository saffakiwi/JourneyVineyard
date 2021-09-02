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

export default function Pete() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader className={classes.cardheader}
        title="Peter and Jackie Gossman"
      />
      <CardMedia
        className={classes.media}
        image="Peter.jpeg"
        title="Paella dish"
      />
      <CardContent>
        <Typography className={classes.cardtext} variant="body2" color="textSecondary" component="p">
        Peter joined Journey Vineyard in 2016 after relocating from South Africa. Peter, together with his wife Jackie, began their ministry in 1995,  serving as associate pastors in the “His People Church” in Johannesburg. 
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
Having always had a heartfelt connection with the Vineyard movement,  they later joined with Vineyard and pastored a Vineyard Church in Port Elizabeth.

Peter is passionate about helping people to connect intimately with our loving God and to find the freedom that comes from experiencing and abiding in His presence.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}