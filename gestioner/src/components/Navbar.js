import React, { useState } from "react";

import "./styles/navStyle.css";
import userProfile from "../images/profile.png";

const Navbar = () => {
  const [contain, setContain] = useState(false);

  return !contain ? (
    <>
      <header className="header">
        <section className="header-title">
          <h1>Gestion de Procesos</h1>
        </section>
      </header>
    </>
  ) : (
    <>
      <header className="main-header">
        <section className="main-header-title">
          <h1 className="title-mobile">GP</h1>
          <h1 className="title-desk">Gestion de Procesos</h1>
        </section>
        <section className="main-header-avatar">
          <div className="avatar-info">
            <p id="name">Andres felipe calvo gomez</p>
            <p id="cargo">Tec. Electronico</p>
            <p id="codigo">cod. 19939</p>
          </div>
          <figure className="avatar">
            <img id="photo" src={userProfile} alt="avatar" />
          </figure>
        </section>
      </header>
    </>
  );
};

export default Navbar;
