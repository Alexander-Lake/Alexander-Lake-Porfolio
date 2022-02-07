import React, { useState } from "react";

export function Nav() {
  const positions = {
    home: "0%",
    about: "20%",
    skills: "40%",
    projects: "60%",
    contact: "80%",
  };

  function handleClick(event) {
    const box = document.querySelector(".animation");
    const location = event.target.className;
    box.style.marginLeft = positions[location];
  }

  function handleHover(event) {
    const elem = document.querySelector(".animation");
    const textSize = event.target.clientWidth;
    console.log(textSize);
    Object.assign(elem.style, {
      borderStyle: "solid",
      borderWidth: "1px",
      height: "2px",
      width: [textSize] + "px",
    });
  }

  return (
    <div className="nav-container">
      <div className="menu-container">
        <ul className="menu">
          <li className="home">
            <span
              onMouseOver={handleHover}
              onClick={handleClick}
              className="home"
            >
              Home
            </span>
          </li>
          <li className="about" onClick={handleClick}>
            <span onMouseOver={handleHover}>About</span>
          </li>
          <li className="skills">
            <span
              onMouseOver={handleHover}
              onClick={handleClick}
              className="skills"
            >
              Skills
            </span>
          </li>
          <li className="projects">
            <span
              onMouseOver={handleHover}
              onClick={handleClick}
              className="projects"
            >
              Projects
            </span>
          </li>
          <li className="contact">
            <span
              onMouseOver={handleHover}
              onClick={handleClick}
              className="contact"
            >
              Contact
            </span>
          </li>
          <div className="animation"></div>
        </ul>
      </div>
    </div>
  );
}
