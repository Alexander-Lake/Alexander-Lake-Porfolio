import React from "react";
import { ProfileImage } from "./Profile-Image";

function Sidebar() {
  return (
    <div>
      <div className="profile-img">
        <div className="img-border">
          <ProfileImage />
        </div>
      </div>
      <div className="sidebar">sidebar</div>
    </div>
  );
}

export default Sidebar;
