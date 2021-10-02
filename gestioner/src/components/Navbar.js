import React from "react";
import { AppContext } from "../context";
import Auth from "../utils/autenticacion";
import { useHistory } from "react-router-dom";
import "./styles/navar.css";
import userProfile from "../images/profile.png";
import Modal from "./Modal";

const Navbar = () => {
  const { user, auth, getDataUsers, setEmail, setPassword} = React.useContext(AppContext);
  const history = useHistory();

  // funciones navbar
  const showMenu = () => {
    var menu = document.getElementById("menu");
    if (menu.classList.contains("hiden")) {
      menu.classList.replace("hiden", "modalBackground");
    } else {
      menu.classList.replace("modalBackground", "hiden");
    }
  };
  
  const handleLogout = async () => {
    const route = await Auth.logoutUsers();
    history.push(route);
    getDataUsers();
    setEmail("");
    setPassword("");
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
