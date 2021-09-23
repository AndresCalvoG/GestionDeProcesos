import React from "react";
import { AppContext } from "../context";

import "./styles/navStyle.css";
import userProfile from "../images/profile.png";

const Navbar = () => {
  return (
    <>
      <AppContext.Consumer>
        {({ user, auth }) =>
          !auth ? (
            <header className="header">
              <section className="header-title">
                <h1>Gestion de Procesos</h1>
              </section>
            </header>
          ) : (
            <header className="main-header">
              <section className="main-header-title">
                <h1 className="title-mobile">GP</h1>
                <h1 className="title-desk">Gestion de Procesos</h1>
              </section>
              <section className="main-header-avatar">
                <div className="avatar-info">
                  <p>
                    {user.fields.first.stringValue}{" "}
                    {user.fields.last.stringValue}
                  </p>
                  <p>{user.fields.cargo.stringValue}</p>
                  <p>{user.fields.code.stringValue}</p>
                </div>
                <figure className="avatar">
                  <img id="photo" src={userProfile} alt="avatar" />
                </figure>
              </section>
            </header>
          )
        }
      </AppContext.Consumer>
    </>
  );
};

export default Navbar;
