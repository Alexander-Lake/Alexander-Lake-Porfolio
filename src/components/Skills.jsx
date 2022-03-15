import React, { useRef, useState } from "react";
import { Card } from "./Card";
import { SkillList } from "./SkillList";


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
    <React.Fragment>
      <div className="skill-page">
        <div className="skill-title">
          <h3>Skills</h3>
        </div>
        <div className="card-container">
          {SkillList.map((skill) => (
            <Card
              key={skill.id}
              logo={skill.logo}
              alt={skill.alt}
              name={skill.name}
              class={skill.class}
              id={skill.id}
            />
          ))}
        </div>
        <div
          ref={carousel}
          className="skills-carousel"
          style={{ left: slide + "px" }}
        >
          {SkillList.map((skill) => (
            <Card
              key={skill.id}
              handleclick={cardsCarousel}
              logo={skill.logo}
              alt={skill.alt}
              name={skill.name}
              class={skill.class}
              id={skill.id}
              position={cardClass[skill.id]}
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
