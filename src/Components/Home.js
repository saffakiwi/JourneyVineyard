import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import './Homepage.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import FacebookIcon from '@material-ui/icons/Facebook';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import Link from '@material-ui/core/Link';
import Image from '../Images/Path.jpeg';
import Divider from '@material-ui/core/Divider';

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
    hcard: {
        display: 'flex',
        width: '90%',
        margin: 'auto',
        height: '500px',
        borderRadius: "20px",
    },

    eventcard: {
        display: 'flex',
        width: '30%',
        margin: 'auto',
        height: '400px',
        borderRadius: "20px",
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
    }
    });

function Home() {

    const styles = useStyles();

    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 1,
                width: "60%",
                border: "none"
            }}
        />
    );
    return (
        <div className="fpage" >
            <div className="header">
        <Card elevation={5} classes={{root: styles.wcard}}>
            
             <div className="hero">
           <h1 id="heroheading">WELCOME TO JOURNEY VINEYARD</h1>
           <p id="subheading">LOVING GOD. LOVING PEOPLE.</p>
            </div>
        </Card>
        </div>

        <div className="events">
            <div id="etext">
            <h1>Life at Journey</h1>
            </div>
        <div className="eventcards">
        <Card elevation={9} classes={{root: styles.eventcard}}>
             <div className="hero">
           <img id="feast" src="familyfeast.jpeg"/>
            </div>
        </Card>

        <Card elevation={9} classes={{root: styles.eventcard}}>
             <div className="hero">
             <img id="feast" src="youth.jpeg"/>
            </div>
        </Card>

        <Card elevation={9} classes={{root: styles.eventcard}}>
             <div className="hero">
             <img id="feast" src="pancakes.jpeg"/>
            </div>
        </Card>
        </div>
        </div>

        <div className="ourheart">
        <Card  elevation={5} classes={{root: styles.hcard}}>
            <div id="valuepic">
            <img src="cross.png"/>
            </div>
             <div className="hero">
           <h1 id="welcome">Our Heart</h1>
           <p id="hearttext">To worship and experience God.
           <Divider /><br/>
           To be a church community with significant impact, lovingly bringing the message of the Good News of Jesus Christ to the Tauranga area.<br/>
           <Divider /><br/>
               To welcome, love, disciple, equip and release people to participate in God’s Kingdom. <br/>
               <Divider /><br/>
               To be a Spirit empowered, caring, healing, creative and relevant community of believers that will contribute to our community and the redemptive history of the Bay of Plenty.</p>
            </div>
        </Card>
        </div>

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

export default Home;