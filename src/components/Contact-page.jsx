import React, { useEffect } from "react";
import { ContactCard } from "./Contact-card";
import { ContactForm } from "./Contact-form";
import { useState, useRef } from "react/cjs/react.development";

export function Contact() {
  const [toggleContactPage, settoggleContactPage] = useState(false);
    
    function useOnClickOutside(ref) {
      useEffect(
        () => {
          const listener = (event) => {
            // Do nothing if clicking ref's element or descendent elements
            if (!ref.current || ref.current.contains(event.target)) {
              return;
            }
            settoggleContactPage(false);
          };
          document.addEventListener("mousedown", listener);
          document.addEventListener("touchstart", listener);
          return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
          };
        },
        [ref]
      );
    }

  return (
    <div className="contact-page">
      <div className="page-title">
        <h3>Get in touch</h3>
      </div>
      {!toggleContactPage ? (
        <ContactCard
          togglePage={() =>
            settoggleContactPage((toggleContactPage) => !toggleContactPage)
          }
        />
      ) : (
        <ContactForm clickListener ={useOnClickOutside}
        stateContoller={()=>settoggleContactPage((toggleContactPage) => !toggleContactPage)}/>
      )}
    </div>
  );
}
