import React from "react";
import { Logo } from "./Header";
import { Nav } from "./Nav";

function App() {
  return (
    <div className="container">
      <Logo />
      <Nav />
      <div className="profile-image"></div>
      <div className="main"></div>
      <div className="copyright"></div>
      <div className="social"></div>
    </div>
  );
}

export default App;
