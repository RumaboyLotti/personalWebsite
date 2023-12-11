import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/Global.css';
import "../styles/Contact.css";

class Contact extends React.Component{
    render() {
        return (
          <section id="contact">
            <h1 id="contact-title"> Looking for me? </h1>
            <div id="contact">
              <form action="/" method="POST" name="contact">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" placeholder="Name" />
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" placeholder="Email" />
                <label htmlFor="message">Message</label>
                <textarea
                  type="textfield"
                  name="message"
                  id="message"
                  placeholder="Enter your Message Here!"
                />
                <input type="submit" value="Blast Off" />
              </form>
            </div>
            <aside id="table">
              <ul id="contact-list">
                <li>
                  {" "}
                  <a href="https://www.linkedin.com/in/ladi-bada-2a2460225/">
                    <LinkedInIcon sx={{ color: "#FEA47F" }}></LinkedInIcon>
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="https://github.com/RumaboyLotti">
                    <GitHubIcon sx={{ color: "#FEA47F" }}></GitHubIcon>
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="mailto:dtyasinmax@gmail.com">
                    <EmailIcon sx={{ color: "#FEA47F" }}></EmailIcon>
                  </a>
                </li>
              </ul>
            </aside>
          </section>
        );
      }

}
export default Contact;