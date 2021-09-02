import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import './Lifegroup.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import FacebookIcon from '@material-ui/icons/Facebook';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import Link from '@material-ui/core/Link';
import Image from '../Images/community.jpeg';
import Lifecards from '../Parts/Lifecards';


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
    lifecard: {
        display: 'flex',
        flexDirection: 'column',
        width: '90%',
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
    }
    
    });

function Lifegroup() {

    const styles = useStyles();

    return (
        <div className="fpage" >
            <div className="header">
        <Card elevation={5} classes={{root: styles.wcard}}>
            
             <div className="abouthero">
           <h1 id="heroheading">LIFE GROUPS</h1>
           <p id="subheading">CONNECT. GROW. COMMUNITY.</p>
            </div>
        </Card>
        </div>

        <div className="main">
        <Card  elevation={5} classes={{root: styles.lifecard}}>
  
            <Card classes={{root: styles.groupbanner}}>
                <div className="bannertext">
                <h1 id="groupheading">Our Life Groups</h1>        
                <p id="grouptext">Life Groups are a great place to build relationally and connect with others in your community. We strongly believe in the power of community, gathering together to stoke the fire of our faith and keeping us in relationship with God and one another. These are safe places to share, to grow and to be challenged and inspired to live out the love and life that He has invested in us. Meeting with others on the Journey, we can grow together as disciples of Jesus.<br/>

                                PLEASE NOTE: LIFE GROUPS ONLY RUN DURING SCHOOL TERM AND CLOSE OVER SCHOOL HOLIDAYS</p>
                </div>
            </Card>
        
            <div className="groups">
                <Lifecards />
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

export default Lifegroup;