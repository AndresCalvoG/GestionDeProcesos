import React from "react";

import "./styles/home.css";
import userLog from "../images/home/user.svg";
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
          <HomeCard name="Logout" image={userLog} route="" />
          <HomeCard name="Manual" image={pdf} route="/Manuals" />
          <HomeCard name="Maquinas" image={machines} route="" />
          <HomeCard name="Calendario" image={calendar} route="" />
          <HomeCard name="Ayuda" image={help} route="" />
          <HomeCard name="Turnos" image={schedule} route="" />
          <HomeCard name="Bitacora" image={binnacle} route="" />
          <HomeCard name="Contraseña" image={passwords} route="" />
        </section>
      </main>
    </>
  );
};

export default Home;
