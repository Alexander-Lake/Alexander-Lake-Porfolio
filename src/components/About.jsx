import React from "react";

export function About() {
  return (
    <div className="about-section">
      <div className="about-title">
        <h3>About me</h3>
      </div>
      <div className="wrapper">
        <div className="summary">
          <p>
            Hello there! My name is <strong>Alexander Lake.</strong> I am a
            fullstack developer and avid gamer. My passion for software
            development is driven by the enjoyment in solving problems. I live
            life in accordance to the Japanese business philosphy "Kaizen",
            because of this I am a perpetual learner.
          </p>
          <p>
            I have 6 years of experience working for a fortune 500 company in a
            collaborative environment. 3 years was spent working as a financial
            analyst and the rest as a data analyst.
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
                      <span>Bachelor of Business Administration Accounting</span>
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
  );
}
