import React, { Component } from 'react';

class Education extends Component {
    render() {
        return (
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
        
        );
    }
}

export default Education;