import React from "react";

import userProfile from "../images/profile.png";

function Profile() {
  return (
    <main className="main-container">
      <figure className="avatar">
        <img id="photo" src={userProfile} alt="avatar" />
      </figure>
    </main>
  );
}

export default Profile;
