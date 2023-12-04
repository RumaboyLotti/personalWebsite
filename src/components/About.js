import React from "react";
import "../styles/About.css";

class About extends React.Component {
  render() {
    return (
      <div id="about">
        <h1>About</h1>
        <ul>
          <li>My name is Ladi.</li>
          <li>I am a software developer.</li>
          <li>
            I Majored in Information Systems and Technology and minored in
            Computer Science at the University of Missouri Saint Louis.
          </li>
          <li>
            I am a passionate and dedicated individual who is eager to learn and
            grow in the field of software development.
          </li>
          <li>
            I have also recently gotten a Raspberry Pi, so I'm open to ideas.
          </li>
        </ul>
        {/* 
            <figure id="Me"> 
                <img src="https://i.imgur.com/5XZQq8M.jpg" alt="Ladi Bada" />  
            </figure>   */}
      </div>
    );
  }
}
export default About;