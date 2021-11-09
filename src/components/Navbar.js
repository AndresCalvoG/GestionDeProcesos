import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context";
import "./styles/navar.css";
import Modal from "./Modal";
import ImageUser from "./ImageUser";

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
            <ImageUser action={showModal} />
          </section>
          <Modal classe={clase}>
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
