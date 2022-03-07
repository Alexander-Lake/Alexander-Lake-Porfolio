import React from "react";
import Connect from "../images/connect.jpg";
import { GrLinkedin, GrGithub } from "react-icons/gr";

export function ContactCard(props) {
  return (
    <div className="contact-card">
      <div className="card__content">
        <div className="front">
          <div className="top">
            <span className="first-inner"></span>
            <span className="second-inner"></span>
            <span className="third-inner"></span>
            <figure className="card__image">
              <img className="background" src={Connect} alt="night sky"></img>
            </figure>
          </div>
          <span className="bottom"></span>
        </div>
        <div className="back">
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
            <button
              onClick={() => {
                props.togglePage();
              }}
              className="message-btn"
            >
              Leave a message!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
