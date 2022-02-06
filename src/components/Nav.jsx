import React from "react";

function boxSlide() {
  const box = document.querySelector(".animation");
}

export function Nav() {
  return (
    <div className="nav-container">
      <div className="menu-container">
        <ul className="menu">
          <li className="home">
            <span>Home</span>
          </li>
          <li className="about" onMouseOver={boxSlide}>
            <span typeof="button">About</span>
          </li>
          <li className="skills">
            <span>Skills</span>
          </li>
          <li className="projects">
            <span>Projects</span>
          </li>
          <li className="contact">
            <span>Contact</span>
          </li>
          <div className="animation"></div>
        </ul>
      </div>
    </div>
  );
}
