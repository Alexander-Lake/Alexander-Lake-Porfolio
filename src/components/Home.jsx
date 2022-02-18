import React from "react";
import temple from "../images/temple.jpg";

export function Home() {

  return (
    <div className="m-intro" style={{ backgroundImage: `url(${temple})` }}>
      <div className="intro-container">
        <div className="intro-text">
          <h3 className="name">Alexander Lake</h3>
          <span className="line"></span>
          <p>
            FullStack <b>Developer</b>
          </p>
        </div>
      </div>
    </div>
  );
}
