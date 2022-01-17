import React from "react";
import { AppContext } from "../context";
import "./styles/home.css";

import Documents from "../images/home/Documents.png";
import Manuals from "../images/home/manual.png";
import Machines from "../images/home/maquina.png";
import Calendar from "../images/home/calendar.png";
import Help from "../images/home/help.png";
import Schedule from "../images/home/horario.png";
import Binnacle from "../images/home/Bitacora.jpg";
import Passwords from "../images/home/password.svg";
import Card from "../components/Card";

function Home() {
  const { company } = React.useContext(AppContext);

  return (
    <main className="main-home">
      <h1 className="home-title">{company.businessName}</h1>
      <section className="home-menu">
        <Card name="Maquinas" image={Machines} route="/Machines" />
        <Card name="Manuales" image={Manuals} route="/Manuals" />
        <Card name="Documentos" image={Documents} route="/Documents" />
        <Card name="Contraseñas" image={Passwords} route="/Passwords" />
        <Card name="Calendario" image={Calendar} route="/Calendar" />
        <Card name="Ayuda" image={Help} route="/Help" />
        <Card name="Turnos" image={Schedule} route="" />
        <Card name="Bitacora" image={Binnacle} route="/Binnacle" />
      </section>
    </main>
  );
}

export default Home;
