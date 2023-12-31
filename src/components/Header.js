import React from "react";  
import "../styles/Global.css";
import "../styles/Header.css";


function Header() {
  return (

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