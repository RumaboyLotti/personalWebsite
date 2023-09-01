import React from "react";
import "../styles/Experience.css";

class Experience extends React.Component{
render(){
    return(
        <div id="experience">
            <h1>Experience</h1> 
            <ul id="joblist">
                <div id="card1">
                    <li>Seo Tech </li>
                    <p>Emphasis on Data Structures & Algorithms in Python, 
                        Using Api’s to solve problems and impletent them into projects,
                        Working with Databases to store and modify data</p>
                    </div>
                <div id="card2">
                    <li>UMSL IT Technician </li>
                    <p>Completed 300+ hours of rigorous computer science and software engineering training focused on full-stack development, data structures, and algorithms.
                       Gained expertise in web application development by building projects using Python (Flask), HTML, CSS, and MySQL.    
                       Collaborated in SCRUM-like teams to build projects, such as wordle implementation for newspaper website, password creator website.
                    </p>
                    </div>
            </ul>
                </div>
    );
}
}
export default Experience;
