import React, { useState } from "react";

export function Nav() {
  const positions = {
    home: "0%",
    about: "17.79%",
    skills: "36.53%",
    projects: "54.4%",
    contact: "77.7%",
  };

  let elem = document.querySelector(".animation");
  let isClicked = false;

  function handleClick(event) {
    // const location = event.target.className;
    // elem.style.marginLeft = positions[location];
    // isClicked = true;

    elem.classList.remove("animation");
  }

  // function handleHover(event) {
  //   isClicked = false;
  //   isClicked ? elem.removeAttribute("style"): console.log("skipped");

  //   const textSize = event.target.clientWidth;
  //   console.log(textSize);
  //   Object.assign(elem.style, {
  //     borderStyle: "solid",
  //     borderWidth: "1px",
  //     height: "2px",
  //     width: [textSize] + "px",
  //   });
  // }

  // function handleMouseLeave(){
  //   !isClicked ? elem.removeAttribute("style"): console.log("leave");
  // }

  return (
    
}
