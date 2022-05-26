import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context";
import "./navar.css";
import Modal from "../Modal";
import ImageUser from "../ImageUser/ImageUser";
import Logo from "./images/logo256.png";

const Navbar = () => {
  const [clase, setClase] = useState("hidenModal");
  const { user, auth, handleLogout } = React.useContext(AppContext);

  // funciones showModal
  function showModal() {
    if (clase === "hidenModal" && auth) {
      setClase("showModal-menu");
    } else {
      setClase("hidenModal");
    }
  }

  return (
    <>
      <header className="header-main">
        <section className="header-title">
          <figure className="header-logo">
            <img src={Logo} alt="logo" />
          </figure>
          <h1>Gestioner</h1>
        </section>
        <nav className="header-avatar">
          {!auth ? (
            <span></span>
          ) : (
            <div className="header-info">
              <p>
                {user.firstName} {user.lastName}
              </p>
              <p>{user.charge}</p>
              <p>{user.code}</p>
            </div>
          )}
          <ImageUser action={showModal} />
        </nav>
      </header>
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
    </>
  );
};

export default Navbar;
