import React, { useState } from "react";
import { DesktopHeader, MobileHeader } from "./Header";
import { About } from "./About";
import { Contact } from "./Contact-page";
import { Home } from "./Home";
import { Skills } from "./Skills";

function App() {
  const [pageBlur, setPageBlur] = useState({
    status: false
  });
  const [content, setContent] = useState('home')

  function handlePageContents(page){
    setContent(page)
    setPageBlur({status:false})
  }

  function handlePageBlur() {
    setPageBlur({
      status: !pageBlur.status && true,
    });
    console.log(pageBlur.status);
  }

  return (
    <div className="page-container">
      <header className="header-container">
        <DesktopHeader renderPage={handlePageContents}/>
        <MobileHeader renderPage={handlePageContents} clickedState={handlePageBlur} state={pageBlur.status} />
      </header>
      <div className={`main-content${pageBlur.status === true ? " open":""}`}>
        {content === "home" && <Home />}
        {content === "about" && <About />}
        {content === "skills" && <Skills />}
        {content === "contact" && <Contact />}
      </div>
      <footer className="footer-container">
        <div className="copyright"></div>
        <div className="social"></div>
      </footer>
    </div>
  );
}

export default App;
