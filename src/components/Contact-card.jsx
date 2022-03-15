import React from "react";
import Connect from "../images/connect.jpg";
import { Socials } from "./socials";

export function ContactCard(props) {
  return (
    <div className="contact-card">
      <div className="card__content">
        <div className="front">
          <div className="top">
            <span className="first-inner"></span>
            <span className="second-inner"></span>
            <figure className="card__image">
              <img className="background" src={Connect} alt="night sky"></img>
            </figure>
          </div>
          <div className="bottom">
            <div className="text">
              <p>
                Get in touch with me!
              </p>
            </div>
          </div>
        </div>
        <div className="back">
          <Socials />
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
  );
}
