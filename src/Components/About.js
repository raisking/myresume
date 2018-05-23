import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <section class="resume-section p-3 p-lg-5 d-flex d-column" id="about">
            <div class="my-auto">
              <h1 class="mb-0">Prakash
                <span class="text-primary">Rai</span>
              </h1>
              <div class="subheading mb-5">FULL STACK SOFTWARE DEVELOPER <br />
               <a href="http://www.raiprakash.com/" target="_blank"> <h4>WWW.RAIPRAKASH.COM</h4></a>
                <a href="mailto:name@email.com">raiprakas007@gmail.com</a>
              </div>
              <p class="mb-5">I am a full-stack software developer based in Atlanta, Georgia. I am a graduate of Kennesaw State University seeking a challenging career in which I can hone my skills, gain a quality experience, build a passion and learn new technologies. I am exceptionally creative and dependable web developer, with years of comprehensive and progressive experience in web development. Encompassing simple bug fixing with long lines of code, building and maintaining databases, writing code and developing web applications, web design and online applications using various programming languages and design tool. Able to motivate development team, identify and remove impediments to turning out quality software applications for clients. Excellent ability to read the code and suggest changes to make the finished project bug free. Articulate communicator; accustomed to developing and maintaining positive relationships with all levels of individuals of diverse backgrounds.</p>
              <ul class="list-inline list-social-icons mb-0">
                <li class="list-inline-item">
                  <a href="https://www.linkedin.com/in/prai007" target= "_blank">
                    <span class="fa-stack fa-lg">
                      <i class="fa fa-circle fa-stack-2x"></i>
                      <i class="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="https://github.com/raisking" target ="_blank">
                    <span class="fa-stack fa-lg">
                      <i class="fa fa-circle fa-stack-2x"></i>
                      <i class="fa fa-github fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </section>
        );
    }
}

export default About;