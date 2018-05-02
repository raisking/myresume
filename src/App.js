import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <div>
<Navbar />

<div class="container-fluid p-0" id="body-margin">

  <section class="resume-section p-3 p-lg-5 d-flex d-column" id="about">
    <div class="my-auto">
      <h1 class="mb-0">Prakash
        <span class="text-primary">Rai</span>
      </h1>
      <div class="subheading mb-5">FULL STACK SOFTWARE DEVELOPER <br />
        <a href="mailto:name@email.com">raiprakas007@gmail.com</a>
      </div>
      <p class="mb-5">I am a full-stack software developer based in Atlanta, Georgia. I am a graduate of Kennesaw State University seeking a challenging career in which I can hone my skills, gain a quality experience, build a passion and learn new technologies. I am exceptionally creative and dependable web developer, with years of comprehensive and progressive experience in web development. Encompassing simple bug fixing with long lines of code, building and maintaining databases, writing code and developing web applications, web design and online applications using various programming languages and design tool. Able to motivate development team, identify and remove impediments to turning out quality software applications for clients. Excellent ability to read the code and suggest changes to make the finished project bug free. Articulate communicator; accustomed to developing and maintaining positive relationships with all levels of individuals of diverse backgrounds.</p>
      <ul class="list-inline list-social-icons mb-0">
        <li class="list-inline-item">
          <a href="https://www.linkedin.com/in/prai007/">
            <span class="fa-stack fa-lg">
              <i class="fa fa-circle fa-stack-2x"></i>
              <i class="fa fa-facebook fa-stack-1x fa-inverse"></i>
            </span>
          </a>
        </li>
        <li class="list-inline-item">
          <a href="#">
            <span class="fa-stack fa-lg">
              <i class="fa fa-circle fa-stack-2x"></i>
              <i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
            </span>
          </a>
        </li>
        <li class="list-inline-item">
          <a href="#">
            <span class="fa-stack fa-lg">
              <i class="fa fa-circle fa-stack-2x"></i>
              <i class="fa fa-linkedin fa-stack-1x fa-inverse"></i>
            </span>
          </a>
        </li>
        <li class="list-inline-item">
          <a href="https://github.com/raisking">
            <span class="fa-stack fa-lg">
              <i class="fa fa-circle fa-stack-2x"></i>
              <i class="fa fa-github fa-stack-1x fa-inverse"></i>
            </span>
          </a>
        </li>
      </ul>
    </div>
  </section>

  <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
    <div class="my-auto">
      <h2 class="mb-5">Experience</h2>

      <div class="resume-item d-flex flex-column flex-md-row mb-5">
        <div class="resume-content mr-auto">
          <h3 class="mb-0">Web Developer</h3>
          <div class="subheading mb-3">Press Chautari</div>
          <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
        </div>
        <div class="resume-date text-md-right">
          <span class="text-primary">November 2017 - Present</span>
        </div>
      </div>

      <div class="resume-item d-flex flex-column flex-md-row mb-5">
        <div class="resume-content mr-auto">
          <h3 class="mb-0">Full Stack Web Developer</h3>
          <div class="subheading mb-3">General Assembly</div>
          <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
        </div>
        <div class="resume-date text-md-right">
          <span class="text-primary">August 2017 - November 2017</span>
        </div>
      </div>

      <div class="resume-item d-flex flex-column flex-md-row mb-5">
        <div class="resume-content mr-auto">
          <h3 class="mb-0">Web Designer</h3>
          <div class="subheading mb-3">The Flag Company</div>
          <p>Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.</p>
        </div>
        <div class="resume-date text-md-right">
          <span class="text-primary">March 2016 - May 2016</span>
        </div>
      </div>

      <div class="resume-item d-flex flex-column flex-md-row">
        <div class="resume-content mr-auto">
          <h3 class="mb-0"> Proprietor</h3>
          <div class="subheading mb-3">Buddha Group Inc</div>
          <p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.</p>
        </div>
        <div class="resume-date text-md-right">
          <span class="text-primary">November 2010 - July 2015</span>
        </div>
      </div>

    </div>

  </section>

  <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
    <div class="my-auto">
      <h2 class="mb-5">Education</h2>

      <div class="resume-item d-flex flex-column flex-md-row">
        <div class="resume-content mr-auto">
          <h3 class="mb-0">General Assembly</h3>
          <div class="subheading mb-3">Certification</div>
          <div>Web Development Immersive</div>
        </div>
        <div class="resume-date text-md-right">
          <span class="text-primary">August 2017 -  Nov 2017</span>
        </div>
      </div>
      <div class="resume-item d-flex flex-column flex-md-row mb-5">
        <div class="resume-content mr-auto">
          <h3 class="mb-0">Kennesaw State University</h3>
          <div class="subheading mb-3">Bachelor of Science</div>
          <div>Information Technology</div>
        </div>
        <div class="resume-date text-md-right">
          <span class="text-primary">August 2014 - May 2017</span>
        </div>
      </div>


    </div>
  </section>

  <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
    <div class="my-auto">
      <h2 class="mb-5">Skills</h2>

      <div class="subheading mb-3">Programming Languages &amp; Tools</div>
      <ul class="list-inline list-icons">
        <li class="list-inline-item">
          <i class="devicons devicons-html5"></i>
        </li>
        <li class="list-inline-item">
          <i class="devicons devicons-css3"></i>
        </li>
        <li class="list-inline-item">
          <i class="devicons devicons-javascript"></i>
        </li>
        <li class="list-inline-item">
          <i class="devicons devicons-jquery"></i>
        </li>
        <li class="list-inline-item">
          <i class="devicons devicons-sass"></i>
        </li>
        <li class="list-inline-item">
          <i class="devicons devicons-less"></i>
        </li>
        <li class="list-inline-item">
          <i class="devicons devicons-bootstrap"></i>
        </li>
        <li class="list-inline-item">
          <i class="devicons devicons-wordpress"></i>
        </li>
        <li class="list-inline-item">
          <i class="devicons devicons-grunt"></i>
        </li>
        <li class="list-inline-item">
          <i class="devicons devicons-gulp"></i>
        </li>
        <li class="list-inline-item">
          <i class="devicons devicons-npm"></i>
        </li>
      </ul>

      <div class="subheading mb-3">Workflow</div>
      <ul class="fa-ul mb-0">
        <li>
          <i class="fa-li fa fa-check"></i>
          Mobile-First, Responsive Design</li>
        <li>
          <i class="fa-li fa fa-check"></i>
          Cross Browser Testing &amp; Debugging</li>
        <li>
          <i class="fa-li fa fa-check"></i>
          Cross Functional Teams</li>
        <li>
          <i class="fa-li fa fa-check"></i>
          Agile Development &amp; Scrum</li>
      </ul>
    </div>
  </section>

  <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="interests">
    <div class="my-auto">
      <h2 class="mb-5">Interests</h2>
      <p>Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skiier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and kayaking.</p>
      <p class="mb-0">When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technolgy advancements in the front-end web development world.</p>
    </div>
  </section>

  {/* <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="awards">
    <div class="my-auto">
      <h2 class="mb-5">Awards &amp; Certifications</h2>
      <ul class="fa-ul mb-0">
        <li>
          <i class="fa-li fa fa-trophy text-warning"></i>
          Google Analytics Certified Developer</li>
        <li>
          <i class="fa-li fa fa-trophy text-warning"></i>
          Mobile Web Specialist - Google Certification</li>
        <li>
          <i class="fa-li fa fa-trophy text-warning"></i>
          1<sup>st</sup>
          Place - University of Colorado Boulder - Emerging Tech Competition 2009</li>
        <li>
          <i class="fa-li fa fa-trophy text-warning"></i>
          1<sup>st</sup>
          Place - University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category)</li>
        <li>
          <i class="fa-li fa fa-trophy text-warning"></i>
          2<sup>nd</sup>
          Place - University of Colorado Boulder - Emerging Tech Competition 2008</li>
        <li>
        <li>
          <i class="fa-li fa fa-trophy text-warning"></i>
          1<sup>st</sup>
          Place - James Buchanan High School - Hackathon 2006</li>
        <li>
          <i class="fa-li fa fa-trophy text-warning"></i>
          3<sup>rd</sup>
          Place - James Buchanan High School - Hackathon 2005</li>
      </ul>
    </div>
  </section> */}

</div>
      </div>
    );
  }
}

export default App;
