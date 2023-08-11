import React from "react";
import Card from "@mui/material/Card";
import CardContent  from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "../styles/Projects.css";


class Projects extends React.Component{

render(){
    const bull = (
        <Box
        component="span"
        sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
        >
        </Box>
    );
    return(
        <div id="projects">
            <Card sx={{ maxWidth: 345 }} centered>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>  
                        <h1>Projects</h1>   
                    </Typography>
                    <Typography variant="h5" component="div">
                        <h2>Project 1</h2>
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        <h3>Project Description</h3>
                    </Typography>
                </CardContent>
                </Card>   
        </div>
    );
}
}
export default Projects;
