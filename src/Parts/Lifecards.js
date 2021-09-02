import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import { green } from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
    position: 'relative',
    minHeight: 200,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  fabGreen: {
    color: theme.palette.common.white,
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[600],
    },
  },
}));

export default function Lifecards() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="action tabs example"
        >
          <Tab label="Peter & Jackie" {...a11yProps(0)} />
          <Tab label="Colin & Rachelle" {...a11yProps(1)} />
          <Tab label="Bruce & Linda" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
        <div className="top">
        <div className="lifeheader">
                    <p className="ltext"> Where: Pyes Pa</p> 
                    <p className="ltext"> When: Wednesdays 7pm</p> 
                    <p className="ltext">Contact: Peter & Jackie 022 067 3868</p>
                    <p className="ltext">Come earlier and join us for dinner together from 6.15pm.</p>
                    </div>
               
                </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <div className="top">
                    <div className="lifeheader">
                    <p className="ltext"> Where: Pyes Pa</p> 
                    <p className="ltext"> When: Thursdays 7pm</p> 
                    <p className="ltext">Contact: Colin & Rachelle 028 420 9591</p>
                    <p className="ltext">Come earlier and join us for dinner together from 6.00pm.</p>
                    </div>
                
                </div>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        <div className="top">
                    <div className="lifeheader">
                    <p className="ltext"> Where: Greerton</p> 
                    <p className="ltext"> When: Tuesdays 7pm</p> 
                    <p className="ltext">Contact: Mark Salisbury 021 156 087</p>
                    <p className="ltext">Come and enjoy community together.</p>
                    </div>
                    
                </div>
        </TabPanel>
      </SwipeableViews>

    </div>
  );
}