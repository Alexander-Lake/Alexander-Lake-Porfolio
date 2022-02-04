import React from "react";

function Sidebar(){

  return(
    <div>
    <div className="profile-image">
      <img src={require("/src/images/profile-image.jpg")} alt="Alexander Lake" />
    </div>
    <div className="sidebar">sidebar</div>
    </div>
  )
}

export default Sidebar;