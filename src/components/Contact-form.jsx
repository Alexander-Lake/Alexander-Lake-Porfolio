import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export function ContactForm(props) {
  const form = useRef();
  const domNode = useRef();
  

  const [confirm, setConfirm] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("gmai", "template_portfolio", form.current, "FBMivn8pO2-CDzZhB")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setConfirm(true);
    setTimeout(() => {
      setConfirm(false);
    }, 2000);
  }

  props.clickListener(domNode)

  return (
    <div ref={domNode} className="form-container">
      <form ref={form} onSubmit={sendEmail} className={`contact-form ${confirm ? "inactive" : ""}`}>
        <ul>
          <li>
            <label>What's your Name?</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
            ></input>
          </li>
          <li>
            <label>What's your email?</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Your email"
            ></input>
          </li>
          <li>
            <label>Message:</label>
            <textarea
              id="message"
              name="message"
              placeholder="Say, Hello!"
            ></textarea>
          </li>
        </ul>
        <input type="submit" value="Send Message" id="submit" />
      </form>
      <span className={`send-alert ${confirm ? "active" : ""}`}>
        Message Sent. Thank you!
      </span>
    </div>
  );
}
