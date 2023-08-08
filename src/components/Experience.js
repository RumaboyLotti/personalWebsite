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
                    <p>Emphasis on Data Structures & Algorithms in Python, Using Api’s to solve problems and impletent them into projects,Working with Databases to store and modify data</p>
                    </div>
                <div id="card2">
                    <li>Umsl IT Technician </li>
                    <p>● Solving technical issues from user error to software issues. Effective team communication and accountability. Willingness to keep improving.Critical thinking and Analysis of operating UMSL’s system</p>
                    </div>
                {/* <li></li>   */}
            </ul>
                </div>
    );
}
}
export default Experience;
