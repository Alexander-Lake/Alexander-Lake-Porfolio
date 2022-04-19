import React from "react";
import logo from "../images/Logo.png";
import background from "../images/connect.jpg"
import { Socials } from "./socials";

export function ContactCard(props) {
  return (
    <div className="contact-card">
      <div className="top">
        <img className="background" src={background} alt="city"></img>
      </div>
      <div className="bottom">
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
  );
}
