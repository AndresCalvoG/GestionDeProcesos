import React from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context";

import "./styles/homeStyles.css";
import userLog from "../images/user.svg";
import pdf from "../images/pdf.png";
import machines from "../images/maquina.png";
import calendar from "../images/calendar.png";
import help from "../images/help.png";
import schedule from "../images/turnos.png";
import binnacle from "../images/Bitacora.jpg";
import passwords from "../images/password.svg";

const Home = () => {
  return (
    <>
      <AppContext.Consumer>
        {({ handleLogout }) => (
          <main className="main-container">
            <section className="main-container--menu">
              <article className="main-container--card" onClick={handleLogout}>
                <h2>Logout</h2>
                <div className="main-container--image">
                  <img src={userLog} alt="Cerrar Sesion" />
                </div>
              </article>

              <article className="main-container--card">
                <h2>Manuales</h2>
                <div>
                  <Link to="./assets/Manuales/manuales.html">
                    <img src={pdf} alt="Manuales en pdf" />
                  </Link>
                </div>
              </article>

              <article className="main-container--card">
                <h2>Maquinas</h2>
                <div>
                  <Link to="./assets/Maquinas/Maquinas.html">
                    <img src={machines} alt="listado de maquinas" />
                  </Link>
                </div>
              </article>

              <article className="main-container--card">
                <h2>Calendario</h2>
                <div>
                  <Link to="./assets/calendario/calendario.html">
                    <img src={calendar} alt="calendario" />
                  </Link>
                </div>
              </article>

              <article className="main-container--card">
                <h2>Ayuda</h2>
                <div>
                  <Link to="./assets/Help/Help.html">
                    <img src={help} alt="help" />
                  </Link>
                </div>
              </article>

              <article className="main-container--card">
                <h2>Turnos</h2>
                <div>
                  <Link to="./assets/Turnos/Turnos.html">
                    <img src={schedule} alt="turnos de trabajo" />
                  </Link>
                </div>
              </article>

              <article className="main-container--card">
                <h2>Bitacora</h2>
                <div>
                  <Link to="./assets/Bitacora\Bitacora.html">
                    <img src={binnacle} alt="Bitacora de trabajo" />
                  </Link>
                </div>
              </article>

              <article className="main-container--card">
                <h2>Contraseñas</h2>
                <div>
                  <Link to="./">
                    <img src={passwords} alt="Contraseñas" />
                  </Link>
                </div>
              </article>
            </section>
          </main>
        )}
      </AppContext.Consumer>
    </>
  );
};

export default Home;
