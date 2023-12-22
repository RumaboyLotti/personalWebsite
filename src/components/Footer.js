import React from "react";
import ContactForm from "./ContactForm";
import "../styles/Footer.css";

export class Footer extends React.Component {
   render() {
     return (
       <footer>
        <ContactForm />
         <p>© 2021 Rumaboy Lotti</p>
       </footer>
     );
   }
 }
 
export default Footer;