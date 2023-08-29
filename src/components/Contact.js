import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/Global.css';
import "../styles/Contact.css";

class Contact extends React.Component{
render(){
    return(
        <div id="contact">
            <div id="table">
            <ul id="contact-list">
                <li> <a href="https://www.linkedin.com/in/ladi-bada-2a2460225/"><LinkedInIcon></LinkedInIcon></a></li>
                <li> <a href="https://github.com/RumaboyLotti"><GitHubIcon></GitHubIcon></a></li>
                <li> <a href= "mailto:@dtyasinmax@gmail.com" > <EmailIcon></EmailIcon></a></li>
            </ul>
            </div>
        </div>
    );
}

}
export default Contact;