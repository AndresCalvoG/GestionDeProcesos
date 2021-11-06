import React from "react";
import { Prompt } from "react-router-dom";

import "./styles/home.css";
import Documents from "../images/home/Documents.png";
import pdf from "../images/home/pdf.png";
import machines from "../images/home/maquina.png";
import calendar from "../images/home/calendar.png";
import help from "../images/home/help.png";
import schedule from "../images/home/turnos.png";
import binnacle from "../images/home/Bitacora.jpg";
import passwords from "../images/home/password.svg";

import Card from "../components/Card";

const Home = () => {
  return (
    <>
      <main className="main-container">
        <section className="main-container--menu">
          <Card name="Documentacion" image={Documents} route="/Documents" />
          <Card name="Manuales" image={pdf} route="/Manuals" />
          <Card name="Maquinas" image={machines} route="" />
          <Card name="Calendario" image={calendar} route="/Calendar" />
          <Card name="Ayuda" image={help} route="/Help" />
          <Card name="Turnos" image={schedule} route="" />
          <Card name="Bitacora" image={binnacle} route="/Binnacle" />
          <Card name="Contraseñas" image={passwords} route="/Passwords" />
        </section>
      </main>
      <Prompt when={false} message="Esta seguro que quieres salir?" />
    </>
  );
};

export default Home;
