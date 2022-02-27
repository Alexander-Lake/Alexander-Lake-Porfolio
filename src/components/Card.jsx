import React, { useRef } from "react";

export function Card(props) {
  const elementRef = useRef();
  return (
    <div
      onClick={(event) => props.handleclick(event, elementRef)}
      ref={elementRef}
      className={`card${props.position ? " " + props.position : ""}`}
      id={props.id}
    >
      <div className={`skill-image ${props.class}`}>
        <img src={props.logo} alt={props.alt}></img>
      </div>
      <div className="inner">
        <span className="skill-name">{props.name}</span>{" "}
      </div>
    </div>
  );
}
