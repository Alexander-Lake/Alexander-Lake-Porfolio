import React from "react";

export function About() {
  return (
    <React.Fragment>
      <div className="about-page">
        <div className="page-title">
          <h3>About me</h3>
        </div>
        <div className="about-section">
          <div className="summary">
            <p>
              Hello there! My name is <strong>Alexander Lake</strong> and welcome to the about me section. I am a fullstack developer with a specialization in the MERN stack. I really enjoy building things piece by piece and watching it all come together. I take a mobile first approach to building web applications that are responsive and accessible to many devices. I believe that modern codes should be clean, easy to understand and reusable.  What I love most about software development is the endless opportunities to tackle new challenges. I enjoy learning new things and considers myself a perpetual learner.    
            </p>
            <p>
              I have 6 years of experience working for a fortune 500 company in finance supporting business bill to cash. My expertise is in process improvement leveraging mordern methods to solve ancient problems. I've worked in a very collaborative environment where groups from many different parts of the business come together to develope new solutions to support the end-user.   
            </p>

            <p>I have a masters degree in computer information systems from Colorado State University. This is a STEM program that mainly focused on Data Governance and Data Analytics.</p>
            <p>
             Now on a more personal level. Feel free to skip to the next section. I am an avid gamer. I love the Massive Multi-player Online (MMO) genre. I enjoy solicizing and working with others to solve challenges in the games. My favorite film genre is Sci-fi, especially the kinds that get you thinking about the unknown. Two of my favorite films of all time are "Arrival" and "Interstellar". This is just a little tidbit about me. If you would like to know more, we can grab some coffee or connect to chat!     
            </p>
          </div>
          <div className="education">
            <div className="education-title">
              <h3>Education</h3>
            </div>
            <div className="timeline">
              <div className="left">
                <div className="time-inner">
                  <span className="begin"></span>
                  <span className="middle"></span>
                  <span className="end"></span>
                </div>
              </div>
              <div className="uni-list">
                <ul>
                  <li>
                    <div className="list-inner">
                      <div className="date">
                        <span>2017-2020</span>
                      </div>
                      <div className="school">
                        <h3>Colorado State University</h3>
                        <span>Master of Computer Information Systems</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list-inner">
                      <div className="date">
                        <span>2013-2015</span>
                      </div>
                      <div className="school">
                        <h3>Northeastern State University</h3>
                        <span>
                          Bachelor of Business Administration Accounting
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list-inner">
                      <div className="date">
                        <span>2012-2014</span>
                      </div>
                      <div className="school">
                        <h3>Tulsa Community College</h3>
                        <span>Associate Accounting</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
