import React, { useEffect, useState } from "react";
import { ContactCard } from "./Contact-card";
import { ContactForm } from "./Contact-form";


export function Contact() {
  const [contactCard, setcontactCard] = useState(false);

  function useOnClickOutside(ref) {
    useEffect(() => {
      const listener = (event) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        setcontactCard(false);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    }, [ref]);
  }

  return (
    <React.Fragment>
      <div className="contact-page">
        <div className="page-title">
          <h3>Get in touch</h3>
        </div>
        {!contactCard ? (
          <ContactCard
            togglePage={() => setcontactCard((contactCard) => !contactCard)}
          />
        ) : (
          <ContactForm
            clickListener={useOnClickOutside}
            stateContoller={() => setcontactCard((contactCard) => !contactCard)}
          />
        )}
      </div>
    </React.Fragment>
  );
}
