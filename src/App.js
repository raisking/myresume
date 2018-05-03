import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Resume from './Components/Resume';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Interests from './Components/Interests';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
          <div class="container-fluid p-0" id="body-margin">
            <About />
            <Resume />
            <Education />
            <Skills />
            <Interests />
          </div>
      </div>
    );
  }
}

export default App;
