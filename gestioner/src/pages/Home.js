import React from "react";

import "./styles/home.css";
import Documents from "../images/home/Documents.png";
import pdf from "../images/home/pdf.png";
import machines from "../images/home/maquina.png";
import calendar from "../images/home/calendar.png";
import help from "../images/home/help.png";
import schedule from "../images/home/turnos.png";
import binnacle from "../images/home/Bitacora.jpg";
import passwords from "../images/home/password.svg";

import HomeCard from "../components/HomeCard";

const Home = () => {
  return (
    <>
      <main className="main-container">
        <section className="main-container--menu">
          <HomeCard name="Documentacion" image={Documents} route="/Documents" />
          <HomeCard name="Manuales" image={pdf} route="/Manuals" />
          <HomeCard name="Maquinas" image={machines} route="" />
          <HomeCard name="Calendario" image={calendar} route="/Calendar" />
          <HomeCard name="Ayuda" image={help} route="/Help" />
          <HomeCard name="Turnos" image={schedule} route="" />
          <HomeCard name="Bitacora" image={binnacle} route="/Binnacle" />
          <HomeCard name="Contraseñas" image={passwords} route="" />
        </section>
      </main>
    </>
  );
};

export default Home;
