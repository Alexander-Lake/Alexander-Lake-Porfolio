import React from "react";
import JS from "../images/Javascript.png";
import HTML5 from "../images/HTML5.png";
import CSS from "../images/CSS3.png";
import Mongo from "../images/MongoDB.png";
import Nodejs from "../images/NodeJs.png";
import ReactImg from "../images/ReactJS.png";
import { Card } from "./Card";

export function Skills() {
  return (
    <div className="content-container">
      <div className="page-title">
        <h3>Skills</h3>
      </div>
      <div className="skills-carousel">
        <Card logo={JS} alt="Javascript logo" name="Javascript" class="js"/>
        <Card logo={HTML5} alt="HTML 5 logo" name="HTML 5" class="html" />
        <Card logo={CSS} alt="CSS 3 logo" name="CSS 3" class="css"/>
        <Card logo={ReactImg} alt="ReactJs logo" name="React Js" class="react"/>
        <Card logo={Nodejs} alt="NodeJs logo" name="NodeJs" class="nodejs"/>
        <Card logo={Mongo} alt="MongoDB logo" name="MongoDB" class="mongo"/>
      </div>
    </div>
  );
}
