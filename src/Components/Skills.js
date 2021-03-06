import React, { Component } from 'react';

class Skills extends Component {
    render() {
        return (
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
                  <i class="devicons devicons-java"></i>
                </li>
                <li class="list-inline-item">
                  <i class="devicons devicons-bootstrap"></i>
                </li>
                <li class="list-inline-item">
                  <i class="devicons devicons-react"></i>
                </li>
                <li class="list-inline-item">
                  <i class="devicons devicons-express"></i>
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
        );
    }
}

export default Skills;