import React from 'react';
import { GrLinkedin, GrGithub } from "react-icons/gr";

export function Socials(){
  return (
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
  )
}