import React from "react";
import { About } from "./About";
import { Home } from "./Home";


function Main(props){

  return(
    <div id="content" className={`main-content ${props.state === true ? "open": ""}`}>
    <About />
    </div>
  )
}

export default Main;

