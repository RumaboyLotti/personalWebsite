import React from "react";
import "../styles/Experience.css";

class Experience extends React.Component {
  render() {
    return (
      <div id="experience">
        <h1>Experience</h1>
        <ul id="joblist">
          <div id="card1">
            <li>Seo Tech </li>
            <p>
            Completed 300+ hours of rigorous computer science and software engineering training focused on full-stack development, data structures, and algorithms.
            Gained expertise in web application development by building projects using Python, Flask, HTML, CSS, and MySQL.
            Collaborated in SCRUM-like teams to build projects, such as a Wordle implementation for a newspaper website, and a password creator website.
            </p>
          </div>
          <div id="card2">
            <li>UMSL IT Technician </li>
            <p>
            Troubleshooted and solved technical issues from user error in UMSL-related software to hardware issues with UMSL-owned computers.
            Effective team communication via Microsoft Teams and Outlook email.
            Analyzed, integrated, and managed to operate UMSL’s system software, including Canvas, MyView, MyHr, SPSS, etc.
</p>
          </div>
        </ul>
      </div>
    );
  }
}
export default Experience;
