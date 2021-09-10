import React from "react";
import { Link, useHistory } from "react-router-dom";

import "./styles/homeStyles.css";
import userLog from "../images/user.svg";
import pdf from "../images/pdf.png";
import machines from "../images/maquina.png";
import calendar from "../images/calendar.png";
import help from "../images/help.png";
import schedule from "../images/turnos.png";
import binnacle from "../images/Bitacora.jpg";
import passwords from "../images/password.svg";

import Navbar from "../components/Navbar";
import Auth from "../utils/autenticacion";

const Home = (props) => {
  const history = useHistory();
  //props.setUser("1");
  // useEffect(() => {
  //   (async function () {
  //     const response = await Auth.validUser();
  //     console.log(response.uid);
  //     const data = await Auth.getDataUser(response.uid);
  //     console.log(data);
  //     if (data.exists) {
  //       props.setAuth(true);
  //       props.setUser(data);
  //     } else {
  //       history.push(response);
  //     }
  //   })();
  //   // return () => {
  //   //     cleanup
  //   // };
  // }, []);

  const handleLogout = async () => {
    const route = await Auth.logoutUsers();
    history.push(route);
  };

  const bigImg = (x) => {
    // x.style.height = "110px";
    // x.style.width = "120px";
  };

  const normalImg = (x) => {
    // x.style.height = "100px";
    // x.style.width = "110px";
  };

  return (
    <>
      <Navbar logged={props.auth} userLogged={props.user} />
      <main className="main-container">
        <section className="main-container--menu">
          <article className="main-container--card" onClick={handleLogout}>
            <h2>Logout</h2>
            <div className="main-container--image">
              <img
                onMouseMove={bigImg(this)}
                onMouseOut={normalImg(this)}
                src={userLog}
                alt="Cerrar Sesion"
              />
            </div>
          </article>

          <article className="main-container--card">
            <h2>Manuales</h2>
            <div>
              <Link to="./assets/Manuales/manuales.html">
                <img
                  onMouseMove={bigImg(this)}
                  onMouseOut={normalImg(this)}
                  src={pdf}
                  alt="Manuales en pdf"
                />
              </Link>
            </div>
          </article>

          <article className="main-container--card">
            <h2>Maquinas</h2>
            <div>
              <Link to="./assets/Maquinas/Maquinas.html">
                <img
                  onMouseMove={bigImg(this)}
                  onMouseOut={normalImg(this)}
                  src={machines}
                  alt="listado de maquinas"
                />
              </Link>
            </div>
          </article>

          <article className="main-container--card">
            <h2>Calendario</h2>
            <div>
              <Link to="./assets/calendario/calendario.html">
                <img
                  onMouseMove={bigImg(this)}
                  onMouseOut={normalImg(this)}
                  src={calendar}
                  alt="calendario"
                />
              </Link>
            </div>
          </article>

          <article className="main-container--card">
            <h2>Ayuda</h2>
            <div>
              <Link to="./assets/Help/Help.html">
                <img
                  onMouseMove={bigImg(this)}
                  onMouseOut={normalImg(this)}
                  src={help}
                  alt="help"
                />
              </Link>
            </div>
          </article>

          <article className="main-container--card">
            <h2>Turnos</h2>
            <div>
              <Link to="./assets/Turnos/Turnos.html">
                <img
                  onMouseMove={bigImg(this)}
                  onMouseOut={normalImg(this)}
                  src={schedule}
                  alt="turnos de trabajo"
                />
              </Link>
            </div>
          </article>

          <article className="main-container--card">
            <h2>Bitacora</h2>
            <div>
              <Link to="./assets/Bitacora\Bitacora.html">
                <img
                  onMouseMove={bigImg(this)}
                  onMouseOut={normalImg(this)}
                  src={binnacle}
                  alt="Bitacora de trabajo"
                />
              </Link>
            </div>
          </article>

          <article className="main-container--card">
            <h2>Contraseñas</h2>
            <div>
              <Link to="./">
                <img
                  onMouseMove={bigImg(this)}
                  onMouseOut={normalImg(this)}
                  src={passwords}
                  alt="Contraseñas"
                />
              </Link>
            </div>
          </article>
        </section>
      </main>
    </>
  );
};

export default Home;
