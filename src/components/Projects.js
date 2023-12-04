import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Projects.css";

class Projects extends React.Component {
  render() {
    return (
      <div>
        <h1 id="projects">Projects</h1>
        <div id="cardholder">
          <Card sx={{ maxWidth: 345, backgroundColor: "#FEA47F" }} id="card">
            <CardContent>
              <a href="https://github.com/RumaboyLotti/MixedM">
                <GitHubIcon sx={{ color: "#B33771" }}></GitHubIcon>
              </a>
              <p className="cardHeader">Mixed Message</p>
              <p className="card-desc">
                Uses JavaScript to randomize words and present an astrology
                message
              </p>
              <p className="card-footer">Js, and HTML</p>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 345, backgroundColor: "#FEA47F" }} id="card2">
            <CardContent>
              <a href="https://github.com/RumaboyLotti/RedditClone">
                <GitHubIcon sx={{ color: "#B33771" }}></GitHubIcon>
              </a>
              <p className="cardHeader">Reddit Clone</p>
              <p className="card-desc">
                Created a Reddit clone to gain front-end web development
                experience.
              </p>
              <p className="card-footer">Js, React (Redux), HTML, CSS</p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}
export default Projects;