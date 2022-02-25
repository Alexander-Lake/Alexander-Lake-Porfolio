import React from "react";
import { About } from "./About";
import { Home } from "./Home";
import { Skills } from "./Skills";



function Main(props){

  return(
    <div className={`main-content ${props.state === true ? "open": ""}`}>
    {/* <Home /> */}
    {/* <About /> */}
    <Skills />
    </div>
  )
}

export default Main;

