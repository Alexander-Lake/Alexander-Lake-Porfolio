import { React, useState } from "react";
import { Socials } from "./socials";

export function getDate() {
  const date = new Date().getFullYear();
  return date;
}

export function DesktopHeader(props) {
  const [element, setElement] = useState({
    position: 30,
    width: 56,
  });

  const activeElement = document.querySelector(
    ".header .menu-container ul .active"
  );

  function handleClick(event) {
    activeElement.classList.remove("active");
    event.target.classList.add("active");
  }
// offsetwidth must be adjusted with element padding
  function handleMouseOver(event) {
    const padding = window.getComputedStyle(event.target).getPropertyValue('padding-left');
    const adjustedAmount = parseInt(padding.replace(/px/,""));
   
    setElement({
      position: event.target.offsetLeft + adjustedAmount,
      width: event.target.offsetWidth - (adjustedAmount*2),
    });
  }

  function handleMouseLeave() {
    const padding = window.getComputedStyle(activeElement).getPropertyValue('padding-left');
    const adjustedAmount = parseInt(padding.replace(/px/,""));

    setElement({
      
      position: activeElement.offsetLeft + adjustedAmount,
      width: activeElement.offsetWidth - (adjustedAmount * 2),
    });
  }

  return (
    <div className="header">
      <div className="logo">
        <h1>AL</h1>
      </div>
      <div className="menu-container">
        <ul onClick={handleClick} onMouseLeave={handleMouseLeave}>
          <li
            onMouseEnter={handleMouseOver}
            onClick={() => {
              props.renderPage("home");
            }}
            className="active"
          >
            Home
          </li>
          <li
            onMouseEnter={handleMouseOver}
            onClick={() => {
              props.renderPage("about");
            }}
            className=""
          >
            About
          </li>
          <li
            onMouseEnter={handleMouseOver}
            onClick={() => {
              props.renderPage("skills");
            }}
            className=""
          >
            Skills
          </li>
          <li
            onMouseEnter={handleMouseOver}
            onClick={() => {
              props.renderPage("projects");
            }}
            className=""
          >
            Projects
          </li>
          <li
            onMouseEnter={handleMouseOver}
            onClick={() => {
              props.renderPage("contact");
            }}
            className=""
          >
            Contact
          </li>
        </ul>
        <span
          className="hover-block"
          style={{ left: element.position + "px", width: element.width + "px" }}
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
        <Socials />
        <div className="copyright">Copyright © {getDate()}</div>
      </div>
    </div>
  );
}
