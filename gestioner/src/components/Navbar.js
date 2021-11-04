import React from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context";
import "./styles/navar.css";
import userProfile from "../images/profile.png";
import Modal from "./Modal";

const Navbar = () => {
  const { user, auth, handleLogout } = React.useContext(AppContext);

  // funciones navbar
  const showMenu = () => {
    var menu = document.getElementById("modalMenu");
    if (menu.classList.contains("hidenModal")) {
      menu.classList.replace("hidenModal", "modalBackground");
    } else {
      menu.classList.replace("modalBackground", "hidenModal");
    }
  };

  return (
    <>
      {!auth ? (
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
                {user.fields.first.stringValue} {user.fields.last.stringValue}
              </p>
              <p>{user.fields.cargo.stringValue}</p>
              <p>{user.fields.code.stringValue}</p>
            </div>
            <figure className="avatar" onClick={showMenu}>
              <img id="photo" src={userProfile} alt="avatar" />
            </figure>
          </section>
          <Modal id="modalMenu">
            <Link to="/Profile">Mi Perfil</Link>
            <p>Noticias</p>
            <p onClick={handleLogout}>Logout</p>
          </Modal>
        </header>
      )}
    </>
  );
};

export default Navbar;
