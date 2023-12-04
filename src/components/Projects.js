import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import GitHubIcon from "@mui/icons-material/GitHub";
import PageviewRoundedIcon from '@mui/icons-material/PageviewRounded';
import "../styles/Projects.css";
class Projects extends React.Component {
  render() {
    return (
      <section id="projects">
        <h1 id="projects">Projects</h1>
        <div id="cardholder">
          <Card sx={{ maxWidth: 345, backgroundColor: "#FEA47F" }} id="card">
            <CardContent>
              <a href="https://github.com/RumaboyLotti/MixedM">
                <GitHubIcon sx={{ color: "#B33771" , height: "25px" }}></GitHubIcon>
              </a>
              <a href="https://rumaboylotti.github.io/MixedM/">
                <PageviewRoundedIcon sx={{ color: "#B33771" , paddingLeft: "20px"}}></PageviewRoundedIcon>
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
      </section>
    );
  }
}
export default Projects;