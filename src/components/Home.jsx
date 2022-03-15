import React from "react";
import homebg from "../images/homebg.jpg";
import sidebarbg from "../images/profilebg.jpg";
import profileimg from "../images/profile.jpg";

export function Home() {
  return (
    <React.Fragment>
      <div className="home-page">
        <div className="m__side-container">
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
        <div className="bg-container">
            <div className="intro-container">
              <div className="intro-text">
                <h3 className="name">Hello, Welcome!</h3>
                <span className="line"></span>
              </div>
            </div>
          {/* <img src={homebg} alt="space"></img> */}
        </div>
      </div>
    </React.Fragment>
  );
}
