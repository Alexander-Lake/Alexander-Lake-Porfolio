import React from "react";
import MobileBackground from '../images/mountain2.jpg'
import Background from "../images/Mountain.jpg";


export function BackgroundImage() {
  return (
    <div className="background-img">
      <img src={Background} alt="Mountain"></img>
    </div>
  );
}

export function Mountain(){
  return(
    <div className="mobile-background-img">
      <img src={MobileBackground} alt="Mountain"></img>
    </div>
  )
}