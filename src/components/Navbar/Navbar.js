import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context";
import "./navar.css";
import Modal from "../Modal";
import ImageUser from "../ImageUser";
import Logo from "./images/logo256.png";

const Navbar = () => {
  const [clase, setClase] = useState("hidenModal");
  const { user, auth, handleLogout } = React.useContext(AppContext);

  // funciones showModal
  const showModal = () => {
    if (clase === "hidenModal") {
      setClase("showModal-menu");
    } else {
      setClase("hidenModal");
    }
  };

  return (
    <>
      {!auth ? (
        <header className="header-main">
          <figure className="header-logo">
            <img src={Logo} alt="logo" />
          </figure>
          <section className="header-title">
            <h1>Gestioner</h1>
          </section>
          <section className="header-avatar">
            <ImageUser action={showModal} />
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
                {user.firstName} {user.lastName}
              </p>
              <p>{user.charge}</p>
              <p>{user.code}</p>
            </div>
            <ImageUser action={showModal} />
          </section>
          <Modal classe={clase}>
            <Link to="/Profile" onClick={showModal}>
              Mi Perfil
            </Link>
            <p>Noticias</p>
            <p
              onClick={() => {
                showModal();
                handleLogout();
              }}
            >
              Logout
            </p>
          </Modal>
        </header>
      )}
    </>
  );
};

export default Navbar;
