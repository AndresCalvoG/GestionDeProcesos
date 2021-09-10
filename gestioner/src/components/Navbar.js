import React from "react";
import "./styles/navStyle.css";
import userProfile from "../images/profile.png";

const Navbar = (props) => {
  //console.log(props.userLogged);
  return !props.logged ? (
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
            <p>
              {props.userLogged.fields.first.stringValue}{" "}
              {props.userLogged.fields.last.stringValue}
            </p>
            <p>{props.userLogged.fields.cargo.stringValue}</p>
            <p>{props.userLogged.fields.code.stringValue}</p>
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
