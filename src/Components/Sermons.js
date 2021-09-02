import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import './Contact.css';
import {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import FacebookIcon from '@material-ui/icons/Facebook';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import Link from '@material-ui/core/Link';
import Image from '../Images/sermons.jpeg';
import Lifecards from '../Parts/Lifecards';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import SendIcon from '@material-ui/icons/Send';
import Divider from '@material-ui/core/Divider';
import SermonCards from '../Parts/SermonCards';

const useStyles = makeStyles({
    root: {
      display: 'flex',
      flexDirection: 'row',
        width: '100%',
        margin: 'auto'
    },
    wcard: {
        display: 'flex',
        width: '90%',
        margin: 'auto',
        height: '500px',
        borderRadius: "20px",
        backgroundImage: `url(${Image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    eventcard: {
        display: 'flex',
        width: '100%',
        margin: 'auto',
        height: '400px',
        borderRadius: "20px",
        
    },
    contactform: {
        display: 'flex',
        flexDirection: 'column',
        width: '48%',
        margin: 'auto',
        height: '780px',
        borderRadius: "20px",
        marginBottom: '40px',
    },
    services: {
        display: 'flex',
        flexDirection: 'column',
        color: '#4399b5',
      backgroundColor: '#2f6882',
      height: '240px',
      width: '100%',
      elevation: 6,
      borderRadius: '0px',
      marginBottom: "50px"
    },
    footer: {
        display: 'flex',
        flexDirection: 'column',
        width: '90%',
        margin: 'auto',
        height: '500px',
        borderRadius: "20px",
    },
    footerbar: {
        display: 'flex',
        flexDirection: 'row',
        color: '#4399b5',
      backgroundColor: '#2f6882',
      height: '80px',
      width: '100%',
      elevation: 6,
      zIndex: 1200,
      borderRadius: '0px',
    },
    social: {
        margin: '5px',
    },
    buttonlinks: {
        fontFamily: "Mina",
        fontSize: "18px",
        color: "#4399b5",
    },
    groups: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        margin: 'auto',
    },
    groupbanner: {
        backgroundColor: '#2f6882'
    },
    nameinput1: {
        width: "49%",
        marginRight: "10px",
        color: "#4399b5",
    },
    nameinput2: {
        width: "49%",
    },
    submit: {
        backgroundColor: "#2f6882",
        color: "white",
        fontSize: "15px",
        width: "25%",
        marginTop: "15px",
        marginRight: "500px",
        justifyContent: "justify"
    },
    sendIcon: {
        marginRight: "10px",
    }
    });


function Sermons() {

    const styles = useStyles();

    return (
        <div className="fpage" >
            <div className="header">
        <Card elevation={5} classes={{root: styles.wcard}}>
            
             <div className="abouthero">
           <h1 id="maincontact">SERMONS</h1>
            </div>
        </Card>
        </div>

        <SermonCards />
       
{/*..................................Footer................................*/}
        <div className="footer">
        <Card  elevation={5} classes={{root: styles.footer}}>
  
            <Card  classes={{root: styles.footerbar}}>
                <div className="contactfooter">
                   <ContactSupportIcon fontSize="large" /><h1 id="contacttext">Contact Us</h1>
                </div>

                <div className="socialfooter">
                <Link href="https://www.facebook.com/journeyvineyard.church" classes={{root: styles.buttonlinks}}>
                   <FacebookIcon classes={{root: styles.social}} fontSize="large"/>
                   </Link>
                   <Link href="https://twitter.com/journeyvineyard" classes={{root: styles.buttonlinks}}>
                   <TwitterIcon classes={{root: styles.social}} fontSize="large"/>
                   </Link>
                   <Link href="https://www.youtube.com/channel/UCnk-8cj4kVhf2p_VXMPaM0ghttps://www.youtube.com/channel/UCnk-8cj4kVhf2p_VXMPaM0g" classes={{root: styles.buttonlinks}}>
                   <YouTubeIcon classes={{root: styles.social}} fontSize="large"/>
                   </Link>
                </div>
            </Card>
        
            <div className="footercontent">

                <div className="footerlinks">
                    <h1 className="hlinks">About</h1>
                    <Button classes={{root: styles.buttonlinks}} className="links">Our Team</Button>
                    <Button classes={{root: styles.buttonlinks}} className="links">Beliefs</Button>
                    <Button classes={{root: styles.buttonlinks}} className="links">Values</Button>
                </div>

            <div className="footerlinks">
                    <h1 className="hlinks">Ministries</h1>
                    <Button classes={{root: styles.buttonlinks}} className="links">Youth</Button>
                    <Button classes={{root: styles.buttonlinks}} className="links">Outreach</Button>
                    <Button classes={{root: styles.buttonlinks}} className="links">Worship</Button>
                    <Button classes={{root: styles.buttonlinks}} className="links">Life Groups</Button>
                </div>

                <div className="footerlinks">
                    <h1 className="hlinks">Get Involved</h1>
                    <Button classes={{root: styles.buttonlinks}} className="links">Services</Button>
                    <Button classes={{root: styles.buttonlinks}} className="links">Serving</Button>
                    <Button classes={{root: styles.buttonlinks}} className="links">Donations</Button>
                </div>
           

            <div className="footerlinks">
                    <h1 className="hlinks">Locations</h1>
                    <Button classes={{root: styles.buttonlinks}} className="links">Venue</Button>
                    <Button classes={{root: styles.buttonlinks}} className="links">Life Groups</Button>
                    <Button classes={{root: styles.buttonlinks}} className="links">Youth Group</Button>
                </div>
            </div>

            <div className="vineyardfooter">
                <div id="logov">
                <img src="vlogo.png"/>
                </div>
                <div id="textv">
                    <p>JOURNEY VINEYARD CHURCH IS PART OF THE VINEYARD CHURCHES AOTEAROA NEW ZEALAND MOVEMENT</p>
                </div>
            </div>
        </Card>
        </div>
        </div>
    )
}

export default Sermons;