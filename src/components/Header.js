import React from "react";  
import "../styles/Global.css";
import "../styles/Header.css";


function Header() {
  return (
    // <Box>
    //   <Tabs value={0}>
    //     <Tab label="About" value={0} sx={{ color: "#FEA47F" }} onClick={() => window.location.href = '#about'} />
    //     <Tab label="Experience" value={1} sx={{ color: "#FEA47F" }} onClick={() => window.location.href = '#experience'} />
    //     <Tab label="Projects" value={2} sx={{ color: "#FEA47F" }} onClick={() => window.location.href = '#projects'} />
    //     <Tab label="Contact" value={3} sx={{ color: "#FEA47F" }} onClick={() => window.location.href = '#contact'} />
    //   </Tabs>
    // </Box>

    <nav className="header bar sticky">
      <ol className="main nav">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ol>
    </nav>
  );
}

export default Header;
