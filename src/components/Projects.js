import React from "react";
import Card from "@mui/material/Card";
import CardContent  from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import GitHubIcon from '@mui/icons-material/GitHub';
import Box from "@mui/material/Box";
import "../styles/Projects.css";


class Projects extends React.Component{

render(){
    const bull = (
        <Box
        component="span"
        sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)",boxshadow: "20px 120px 45px black "}}
        >
        </Box>
    );
    return(
        <div>
            <h1>Projects</h1>
            <div id="cardholder">
            <Card sx={{ maxWidth: 345, backgroundColor: "#FEA47F" }} centered id ="card">
                <CardContent>
                    <Typography sx={{ fontSize: 10, color: "#B33771" }}  gutterBottom>  
                    <a href="https://github.com/RumaboyLotti/MixedM"><GitHubIcon sx={{ color: "#B33771"}}></GitHubIcon></a>
                        <h1>Mixed Message</h1>   
                    </Typography>
                    <Typography variant="h5" component="div">
                        <h5>Uses JavaScript to randomize words and present an astrology message</h5>
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        <h6>Js, and HTML</h6>
                    </Typography>
                </CardContent>
            </Card>   
            <Card sx={{ maxWidth: 345, backgroundColor: "#FEA47F" }} centered id ="card2">
                <CardContent>
                    <Typography sx={{ fontSize: 10, color: "#B33771" }}  gutterBottom>
                    <a href="https://github.com/RumaboyLotti/RedditClone"><GitHubIcon sx={{ color: "#B33771"}}></GitHubIcon></a> 
                        <h1>Reddit Clone</h1>   
                    </Typography>
                    <Typography variant="h5" component="div">
                        <h5>Created a Reddit clone to gain front-end web development experience.</h5>
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        <h6>JavaScript, React (Redux), HTML, CSS</h6>
                    </Typography>
                </CardContent>
            </Card>  
            </div>
        </div>
    );
}
}
export default Projects;
