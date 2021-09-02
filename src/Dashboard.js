import React from 'react';
import {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Home from './Components/Home';
import './Home.css';
import About from './Components/About';
import Services from './Components/Services';
import Lifegroup from './Components/Lifegroup';
import Contact from './Components/Contact';
import Sermons from './Components/Sermons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appColours: {
      color: '#4399b5',
      backgroundColor: 'white',
      height: '80px',
      elevation: 6,
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [page, setPage] = useState("b1")

  // ------Conditional rendering function
  const handleClick = (prop) => {
    setPage(prop)
  }

  function Navigation(page) {
    if (page === "b1") {
      return <Home />
    } else if (page === "b2") {
      return <About />
    } else if (page === "b3") {
        return <Services />
    }else if (page === "b4") {
        return <Lifegroup />
  }else if (page === "b5") {
    return <Sermons />
}else if (page === "b7") {
  return <Contact />
}
}
  return (
    <div className={classes.root}>
      <AppBar className={classes.appColours} position="fixed">
        <Toolbar>
        <div className="appmain"> 
            <img id="mainlogo" src="jvlogo.png"/>
        </div>
        <div className="bgroup">
          <Button color="inherit" onClick={() => handleClick("b1")}>Welcome</Button>
          <Button color="inherit" onClick={() => handleClick("b3")}>Service</Button>
          <Button color="inherit" onClick={() => handleClick("b2")}>About Us</Button>
          <Button color="inherit" onClick={() => handleClick("b4")}>Life Groups</Button>
          <Button color="inherit" onClick={() => handleClick("b5")}>Sermons</Button>
          <Button color="inherit">Events</Button>
          <Button color="inherit" onClick={() => handleClick("b7")}>Contact</Button>
          </div>
        </Toolbar>
      </AppBar>

     {/* ----------Conditional rendering ---------------- */}
    
        <div className="render">
         {Navigation(page)}     
          </div>
  
    </div>
  );
}