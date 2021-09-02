import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import './Services.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import FacebookIcon from '@material-ui/icons/Facebook';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import Link from '@material-ui/core/Link';
import Image from '../Images/service.jpeg';


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
    servicecard: {
        display: 'flex',
        flexDirection: 'column',
        width: '90%',
        margin: 'auto',
        height: '750px',
        borderRadius: "20px",
        marginBottom: '30px',
    },
    services: {
        display: 'flex',
        flexDirection: 'column',
        color: '#4399b5',
      backgroundColor: '#2f6882',
      height: '220px',
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
    
    });

function Services() {

    const styles = useStyles();

    return (
        <div className="fpage" >
            <div className="header">
        <Card elevation={5} classes={{root: styles.wcard}}>
            
             <div className="abouthero">
           <h1 id="heroheading">SERVICES</h1>
           <p id="subheading">EVERY SUNDAY AT 10.30AM</p>
            </div>
        </Card>
        </div>

        <div className="servicecard">
        <Card  elevation={5} classes={{root: styles.servicecard}}>
  
            <Card  classes={{root: styles.services}}>
                <div className="services">
                <h1 id="serviceheading">Our Services</h1>        
                <p id="servicetext">We are a growing community of followers of Jesus and we want to be a place where God meets people who are far from perfect. Anyone is welcome, no matter where you are on your spiritual journey; whether you are close, distant, or not even sure that there is a God, we want you to feel free to hang out with us, ask questions, seek truth and experience Christian community. So come as you are and join us as we love God, love each other and serve our community together.</p>
                </div>
            </Card>
        
            <div className="smap">

            <div id="location">
                <h2 id="infoheader">EVERY SUNDAY, 10:30AM<br/>
ST. LEGER STAND, TAURANGA RACECOURSE, 1381 CAMERON ROAD, GREERTON, TAURANGA</h2>
            <p id="serviceinfo">Our services are casual, no need to dress up, we begin our service with music, followed by a message and an opportunity for prayer. The last Sunday of every month we share a meal together after the service.<br/><br/>

So, if you are looking for a church or even if you’re not, but you are wondering if God is actually there at all, come and journey with us as we discover what following Jesus in the 21st Century looks like.<br/><br/>

We look forward to seeing you on the journey…</p>
            </div>

            <div id="map">

            </div>


            </div>
            
            
        </Card>
        </div>
       

       
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

export default Services;