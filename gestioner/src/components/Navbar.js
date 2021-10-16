import React from "react";
import { AppContext } from "../context";
import "./styles/navar.css";
import userProfile from "../images/profile.png";
import Modal from "./Modal";

const Navbar = () => {
  const { user, auth, handleLogout } = React.useContext(AppContext);

  // funciones navbar
  const showMenu = () => {
    var menu = document.getElementById("menu");
    if (menu.classList.contains("hiden")) {
      menu.classList.replace("hiden", "modalBackground");
    } else {
      menu.classList.replace("modalBackground", "hiden");
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
          <Modal>
            <p>Mi Perfil</p>
            <p>Noticias</p>
            <p onClick={handleLogout}>Logout</p>
          </Modal>
        </header>
      )}
    </>
  );
};

export default Navbar;
