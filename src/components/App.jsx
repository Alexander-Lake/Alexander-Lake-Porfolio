import React, { useState } from "react";
import { MobileHeader } from "./Header";
import Main from "./Main";

function App() {
  const [page, setPage] = useState({
    status: false,
  });

  function renderContent() {
    setPage({
      status: !page.status && true,
    });
    console.log(page.status);
  }

  return (
    <div className="page-container">
      <header className="header-container">
        <MobileHeader clickedState={renderContent} state={page.status} />
      </header>
      <Main state={page.status} />
      <footer className="footer-container">
        <div className="copyright"></div>
        <div className="social"></div>
      </footer>
    </div>
  );
}

export default App;
