import React from "react";
import { GrLinkedin, GrGithub } from "react-icons/gr";

function getDate() {
  const date = new Date().getFullYear();
  return date;
}

export function MobileHeader(props) {
  return (
    <div className="mobile-header-container">
      <div className="header-wrapper">
        <div className="m-logo">
          <h1>A.L</h1>
        </div>
        <div
          onClick={() => {
            props.clickedState();
          }}
          className={`menu-btn ${props.state && "active"}`}
        >
          <div className="inner-left"></div>
          <div className="inner-right"></div>
        </div>
      </div>
      <div className={`menu-container ${props.state && "open"}`}>
        <div className="menu-items">
          <ul>
            <li className="home">
              <span className="home">Home</span>
            </li>
            <li className="about">
              <span>About</span>
            </li>
            <li className="skills">
              <span className="skills">Skills</span>
            </li>
            <li className="projects">
              <span className="projects">Projects</span>
            </li>
            <li className="contact">
              <span className="contact">Contact</span>
            </li>
          </ul>
        </div>
        <div className="socials">
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/al-01/"
                target={"_blank"}
                rel="noreferrer"
              >
                <GrLinkedin className="linkedin-icon" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Alexander-Lake"
                target={"_blank"}
                rel="noreferrer"
              >
                <GrGithub className="github-icon" />
              </a>
            </li>
          </ul>
        </div>
        <div className="copyright">Copyright © {getDate()}</div>
      </div>
    </div>
  );
}
