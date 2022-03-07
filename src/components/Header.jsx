import { React, useState } from "react";
import { GrLinkedin, GrGithub } from "react-icons/gr";

function getDate() {
  const date = new Date().getFullYear();
  return date;
}

export function DesktopHeader(props) {
  const [hoverPosition, setHoverPosition] = useState(0);
  const [itemsWidth, setitemsWidth] = useState(116);

  function handleClick(event) {
    console.log(event.target);
    setHoverPosition(event.target.offsetLeft);
    setitemsWidth(event.target.offsetWidth);
  }

  return (
    <div className="header">
      <div className="logo">
        <h1>Alexander Lake</h1>
      </div>
      <div className="menu-container">
        <ul onMouseOver={handleClick}>
          <li
            onClick={() => {
              props.renderPage("home");
            }}
            className="home"
          >Home</li>
          <li
            onClick={() => {
              props.renderPage("about");
            }}
            className="about"
          >About</li>
          <li
            onClick={() => {
              props.renderPage("skills");
            }}
            className="skills"
          >Skills</li>
          <li
            onClick={() => {
              props.renderPage("projects");
            }}
            className="projects"
          >Projects</li>
          <li
            onClick={() => {
              props.renderPage("contact");
            }}
            className="contact"
          >Contact</li>
        </ul>
        <span
          className="hover-block"
          style={{ left: hoverPosition + "px", width: itemsWidth + "px" }}
        ></span>
      </div>
    </div>
  );
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
      <div className={`mobile__menu-container${props.state ? " open" : ""}`}>
        <div className="m__menu-items">
          <ul>
            <li
              onClick={() => {
                props.renderPage("home");
              }}
              className="home"
            >
              <span className="home">Home</span>
            </li>
            <li
              onClick={() => {
                props.renderPage("about");
              }}
              className="about"
            >
              <span>About</span>
            </li>
            <li
              onClick={() => {
                props.renderPage("skills");
              }}
              className="skills"
            >
              <span className="skills">Skills</span>
            </li>
            <li
              onClick={() => {
                props.renderPage("projects");
              }}
              className="projects"
            >
              <span className="projects">Projects</span>
            </li>
            <li
              onClick={() => {
                props.renderPage("contact");
              }}
              className="contact"
            >
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
