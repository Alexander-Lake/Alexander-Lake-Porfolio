import React, { useRef, useState } from "react";
import JS from "../images/Javascript.png";
import HTML5 from "../images/HTML5.png";
import CSS from "../images/CSS3.png";
import Mongo from "../images/MongoDB.png";
import Nodejs from "../images/NodeJs.png";
import ReactImg from "../images/ReactJS.png";
import { Card } from "./Card";

export function Skills() {
  const carousel = useRef("");
  const [slide, setSlide] = useState(0);
  const [cardClass, setCardClass] = useState({
    1: "",
    2: "",
    3: "prev",
    4: "active",
    5: "next",
    6: "",
  });

  function cardsCarousel(event, ref) {
    const slideWidth = event.currentTarget.offsetWidth;
    const currentCard = ref.current;
    const currentCardIndex = parseInt(currentCard.id);

    setSlide((prevValue) =>
      currentCard.classList.contains("prev")
        ? (prevValue += slideWidth)
        : currentCard.classList.contains("next")
        ? (prevValue -= slideWidth)
        : prevValue
    );

    console.log(slide);

    setCardClass({
      [currentCardIndex - 1]: "prev",
      [currentCardIndex + 1]: "next",
      [currentCardIndex]: "active",
    });
  }
  return (
    <div className="skill-page">
      <div className="skill-title">
        <h3>Skills</h3>
      </div>
      <div
        ref={carousel}
        className="skills-carousel"
        style={{ left: slide + "px" }}
      >
        <Card
          handleclick={cardsCarousel}
          logo={JS}
          alt="Javascript logo"
          name="Javascript"
          class="js"
          id="1"
          position={cardClass[1]}
        />
        <Card
          handleclick={cardsCarousel}
          logo={HTML5}
          alt="HTML 5 logo"
          name="HTML 5"
          class="html"
          id="2"
          position={cardClass[2]}
        />
        <Card
          handleclick={cardsCarousel}
          logo={CSS}
          alt="CSS 3 logo"
          name="CSS 3"
          class="css"
          id="3"
          position={cardClass[3]}
        />
        <Card
          handleclick={cardsCarousel}
          logo={ReactImg}
          alt="ReactJs logo"
          name="React Js"
          class="react"
          id="4"
          position={cardClass[4]}
        />
        <Card
          handleclick={cardsCarousel}
          logo={Nodejs}
          alt="NodeJs logo"
          name="NodeJs"
          class="nodejs"
          id="5"
          position={cardClass[5]}
        />
        <Card
          handleclick={cardsCarousel}
          logo={Mongo}
          alt="MongoDB logo"
          name="MongoDB"
          class="mongo"
          id="6"
          position={cardClass[6]}
        />
      </div>
    </div>
  );
}
