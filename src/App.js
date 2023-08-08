import React from "react";
import Intro from "./components/Intro";
import Experience from "./components/Experience";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import './App.css';

function App() {
  return (
    <div className="App">
        <div id="content">
        <Intro></Intro>
        <About></About>
        <Experience></Experience>
        <Projects></Projects>
        <Contact></Contact>
      </div>

    </div>
  );
}

export default App;
