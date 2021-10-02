import React from "react";

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


const Home = () => {

  return (
    <>
      <main className="main-container">
        <section className="main-container--menu">
          <HomeCard
            name="Logout"
            image={userLog}
            route=""
          />
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
