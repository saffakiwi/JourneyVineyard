import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Image from '../Images/Unitedhands.jpeg';
import '../Sermons.css';
import GetAppIcon from '@material-ui/icons/GetApp';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: "40%",
    margin: "auto",
    borderRadius: "20px",
    
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    display: "flex",
    backgroundImage: `url(${Image})`,
    width: 200,
    height: 170,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  appIcon: {
      marginRight: "20px",
      color: "grey"
  }
}));

export default function SermonCards() {
  const classes = useStyles();
  const theme = useTheme();

  return (
<div style={{display: "flex", flexDirection: "row"}}>
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
        <CardMedia
        className={classes.cover}
      />
          
        </CardContent>
        <div className={classes.controls}>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon className={classes.playIcon} />
          </IconButton>
        </div>
      </div>
      <div className="playcard">
      <Typography color="textSecondary" variant="subtitle2">
            1 August 2021
          </Typography><br/>
          <Typography variant="h7" component="h7">
          Whanaungatanga Kotahitanga - Together as One
          </Typography>
          <Typography variant="h9" component="h9">
          Shad & Leanne Rolleston
          </Typography><br/>
          <Typography variant="subtitle2" color="textSecondary">
          We were truly blessed to have these two great leaders in our city - Shad and Leanne Rolleston - come and share an incredible word on God’s heart for unity and oneness in our city and Nation.
          </Typography>
            <div className="Icons">
              <GetAppIcon className={classes.appIcon}/>
              <ThumbUpAltIcon className={classes.appIcon}/>
              <ShareIcon className={classes.appIcon}/>
              </div>
          </div>
    </Card>

<Card className={classes.root}>
<div className={classes.details}>
  <CardContent className={classes.content}>
  <CardMedia
  className={classes.cover}
/>
    
  </CardContent>
  <div className={classes.controls}>
    <IconButton aria-label="play/pause">
      <PlayArrowIcon className={classes.playIcon} 
      src="src/Images/Together.mp3"/>
    </IconButton>
  </div>
</div>
<div className="playcard">
<Typography color="textSecondary" variant="subtitle2">
      1 August 2021
    </Typography><br/>
    <Typography variant="h7" component="h7">
    Whanaungatanga Kotahitanga - Together as One
    </Typography>
    <Typography variant="h9" component="h9">
    Shad & Leanne Rolleston
    </Typography><br/>
    <Typography variant="subtitle2" color="textSecondary">
    We were truly blessed to have these two great leaders in our city - Shad and Leanne Rolleston - come and share an incredible word on God’s heart for unity and oneness in our city and Nation.
    </Typography>
    <div className="Icons">
              <GetAppIcon className={classes.appIcon}/>
              <ThumbUpAltIcon className={classes.appIcon}/>
              <ShareIcon className={classes.appIcon}/>
              </div>
    </div>
</Card>
</div>
  );
}