import React from "react";
import { Mountain } from "./Images";

export function Home() {
  return (
    <div className="m-intro">
      <div className="intro-container">
        <h3 className="name">Alexander Lake</h3>
        <span className="line"></span>
        <p>
          <b>FullStack Developer</b>
        </p>
      </div>
      <Mountain />
    </div>
  );
}
