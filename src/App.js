import React from 'react';
import Intro from "./components/Intro";
import Experience from "./components/Experience";
import About from "./components/About";
import Projects from "./components/Projects";
import logo from './logo.svg';
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
      <SidebarNav />

    </div>
  );
}

export default App;
