import React from "react";
import { MobileHeader } from "./Header";
import Main from "./Main";

function App() {
  return (
    <div className="grid-container">
      <header className="header-container">
        <MobileHeader />
      </header>
      <Main />
      <footer className="footer-container">
        <div className="copyright"></div>
        <div className="social"></div>
      </footer>
    </div>
  );
}

export default App;
