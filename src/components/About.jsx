import React from "react";

export function About() {
  return (
    <div className="about">
      <h1>About me</h1>
      <div>
        <p>
          Hello there! My name is <strong>Alexander Lake.</strong> I am a
          fullstack developer and avid gamer. My passion for software
          development is driven by enjoyment in solving problems. I live life in
          accordance to the Japanese business philosphy "Kaizen", because of
          this I am a perpetual learner.
        </p>
        <p>
          I have 6 years of experience working for a fortune 500 company in a
          collaborative environment. 3 years was spent working as a financial
          analyst and the rest as a data analyst.
        </p>
      </div>
      <div>
        <h1>Education</h1>
        <div className="timeline">
          <span className="begin"></span>
          <span className="middle"></span>
          <span className="end"></span>
        </div>
        <ul>
          <li>
            <div>
              <h6>Colorado State University</h6>
              <p>Master of Computer Information Systems</p>
              <p>Master Degree</p>
            </div>
          </li>
          <li>
            <div>
              <h6>Northeastern State University</h6>
              <p>Business Administration Accounting</p>
              <p>Bachelor Degree</p>
            </div>
          </li>
          <li>
            <div>
              <h6>Tulsa Community College</h6>
              <p>Accounting</p>
              <p>Associate Degree</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
