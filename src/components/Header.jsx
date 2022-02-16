import React, { useState } from "react";

export function MobileHeader() {
  const [toggleMenu, setToggleMenu] = useState(false);

  function handleClick() {
    setToggleMenu(!toggleMenu ? true : false);
  }
  return (
    <div className="mobile-header-container">
      <div className="wrapper">
        <div className="m-logo">
          <h1>A.L</h1>
        </div>
        <div onClick={handleClick} className={`menu-btn ${toggleMenu ? "active" : "" }`}>
          <div className="inner-left"></div>
          <div className="inner-right" ></div>
        </div>
      </div>
      <div className={`menu-container ${toggleMenu ? "open" : "" }`}>
        <ul className="menu">
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
          <div className="animation"></div>
        </ul>
      </div>
    </div>
  );
}
