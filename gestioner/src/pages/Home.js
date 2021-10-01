import React from "react";
import { AppContext } from "../context";

import "./styles/home.css";
import userLog from "../images/user.svg";
import pdf from "../images/pdf.png";
import machines from "../images/maquina.png";
import calendar from "../images/calendar.png";
import help from "../images/help.png";
import schedule from "../images/turnos.png";
import binnacle from "../images/Bitacora.jpg";
import passwords from "../images/password.svg";

import HomeCard from "../components/HomeCard";
import Modal from "../components/Modal";

const Home = () => {
  const { handleLogout } = React.useContext(AppContext);

  return (
    <>
      <main className="main-container">
        <section className="main-container--menu">
          <HomeCard
            name="Logout"
            image={userLog}
            action={handleLogout}
            route=""
          />
          <HomeCard name="Manual" image={pdf} route="/Manuals" />
          <HomeCard name="Maquinas" image={machines} route="" />
          <HomeCard name="Calendario" image={calendar} route="" />
          <HomeCard name="Ayuda" image={help} route="" />
          <HomeCard name="Turnos" image={schedule} route="" />
          <HomeCard name="Bitacora" image={binnacle} route="" />
          <HomeCard name="Contraseña" image={passwords} route="" />
          <Modal>
            <h1>Soy un Modal</h1>
          </Modal>
        </section>
      </main>
    </>
  );
};

export default Home;
