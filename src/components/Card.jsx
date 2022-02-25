import React from "react";

export function Card(props) {
  return (
    <div className="card">
      <div className={`skill-image ${props.class}`}>
        <img src={props.logo} alt={props.alt}></img>
      </div>
      <div className="inner">
        <span className="skill-name">{props.name}</span>{" "}
      </div>
    </div>
  );
}
