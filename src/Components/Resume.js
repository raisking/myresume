import React, { Component } from 'react';

class Resume extends Component {
  render() {
    return (
      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
        <div class="my-auto">
          <h2 class="mb-5">Experience</h2>

          <div class="resume-item d-flex flex-column flex-md-row mb-5">
            <div class="resume-content mr-auto">
              <h3 class="mb-0">Web Developer</h3>
              <div class="subheading mb-3">Press Chautari</div>
              <ul>
                <li>Update and maintain the web contents</li>
                <li>Translated wireframes and mockups into interactive features, using HTML/CSS and JavaScript</li>
              </ul>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">November 2017 - May 2018</span>
            </div>
          </div>

          <div class="resume-item d-flex flex-column flex-md-row mb-5">
            <div class="resume-content mr-auto">
              <h3 class="mb-0">Full Stack Web Developer</h3>
              <div class="subheading mb-3">General Assembly</div>
              <ul>
                <li>Participated in a 12-week full-time development program focused on learning the skills to become a full stack
                  developer. </li>
                <li>Learned the front and back end languages necessary to begin a successful career in web development.</li>
              </ul>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">August 2017 - November 2017</span>
            </div>
          </div>

          <div class="resume-item d-flex flex-column flex-md-row mb-5">
            <div class="resume-content mr-auto">
              <h3 class="mb-0">Web Designer</h3>
              <div class="subheading mb-3">The Flag Company</div>
              <ul>
                  <li>Developed a user responsive website</li>
                  <li>Assured that all user input is validated before submitting to
back-end</li>
                </ul>
             </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">March 2016 - May 2016</span>
            </div>
          </div>

          <div class="resume-item d-flex flex-column flex-md-row">
            <div class="resume-content mr-auto">
              <h3 class="mb-0"> Proprietor</h3>
              <div class="subheading mb-3">Buddha Group Inc</div>
              <ul>
                <li>Managed daily store operations, monitored and ordered
inventory, cash flow and customer service.</li>
                <li>Trained all new employees in compliance with state laws
and rules of Georgia Lottery and slot machine.</li>
                </ul>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">November 2010 - July 2015</span>
            </div>
          </div>

        </div>
      </section>
    );
  }
}

export default Resume;