import React, { useState } from "react";
import { DesktopHeader, MobileHeader } from "./Header";
import { About } from "./About";
import { Contact } from "./Contact-page";
import { Home } from "./Home";
import { Skills } from "./Skills";
import { Socials } from "./socials";
import { getDate } from "./Header";
import sidebarbg from "../images/profilebg.jpg";
import profileimg from "../images/profile.jpg";
import { Projects } from "./project-page";

function App() {
  const [pageBlur, setPageBlur] = useState({
    status: false,
  });
  const [content, setContent] = useState("home");

  function handlePageContents(page) {
    setContent(page);
    setPageBlur({ status: false });
    console.log(content);
  }

  function handlePageBlur() {
    setPageBlur({
      status: !pageBlur.status && true,
    });
    console.log(pageBlur.status);
  }

  return (
    <div className="page-container">
      <span className="border-left"></span>
      <span className="border-right"></span>
      <header className="header-container">
        <DesktopHeader renderPage={handlePageContents} />
        <MobileHeader
          renderPage={handlePageContents}
          clickedState={handlePageBlur}
          state={pageBlur.status}
        />
      </header>
      <div className={`main-content${pageBlur.status === true ? " open" : ""}`}>
        <div className="side-container">
          <div className="profile-card">
            <div className="top">
              <img src={sidebarbg} alt="City"></img>
            </div>
            <div className="frame">
              <img src={profileimg} alt="City"></img>
            </div>
            <div className="bottom">
              <div className="card-info">
                <h3>Alexander Lake</h3>
                <p>Fullstack Developer</p>
              </div>
            </div>
          </div>
        </div>
        {content === "home" && <Home />}
        {content === "about" && <About />}
        {content === "skills" && <Skills />}
        {content === "projects" && <Projects />}
        {content === "contact" && <Contact />}
      </div>
      <div className="footer-container">
        <div className="wrapper">
          <Socials />
          <span className="inner"></span>
          <div className="copyright">Copyright © {getDate()}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
