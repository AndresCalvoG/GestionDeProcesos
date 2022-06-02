import React, { useState } from "react";
import { AppContext } from "../../context";
import "./home.css";

import Documents from "./images/Documents.png";
import Manuals from "./images/manual.png";
import Machines from "./images/maquina.png";
import Calendar from "./images/calendar.png";
import Help from "./images/help.png";
import Schedule from "./images/horario.png";
import Binnacle from "./images/Bitacora.jpg";
import Passwords from "./images/password.svg";
import Card from "../../components/Card/Card";

function Home() {
  const { company, areas } = React.useContext(AppContext);
  const [fault, setFault] = useState("");

  return (
    <main className="Home-main">
      <h1 className="home-title">{company.businessName}</h1>
      <section className="home-menu">
        <Card name="Maquinas" image={Machines} route="/Machines" />
        {!areas[0].empty ? (
          <>
            <Card name="Manuales" image={Manuals} route="/Manuals" />
            <Card name="Documentos" image={Documents} route="/Documents" />
            <Card name="Contraseñas" image={Passwords} route="/Passwords" />
            <Card name="Calendario" image={Calendar} route="/Calendar" />
            <Card name="Ayuda" image={Help} route="/Help" />
            <Card name="Turnos" image={Schedule} route="" />
            <Card name="Bitacora" image={Binnacle} route="/Binnacle" />
          </>
        ) : (
          <>
            <Card
              name="Manuales"
              image={Manuals}
              action={() => {
                setFault("No existen Maquinas, por favor cree una.");
              }}
            />
            <Card
              name="Documentos"
              image={Documents}
              action={() => {
                setFault("No existen Maquinas, por favor cree una.");
              }}
            />
            <Card
              name="Contraseñas"
              image={Passwords}
              action={() => {
                setFault("No existen Maquinas, por favor cree una.");
              }}
            />
            <Card
              name="Calendario"
              image={Calendar}
              action={() => {
                setFault("No existen Maquinas, por favor cree una.");
              }}
            />
            <Card
              name="Ayuda"
              image={Help}
              action={() => {
                setFault("No existen Maquinas, por favor cree una.");
              }}
            />
            <Card
              name="Turnos"
              image={Schedule}
              action={() => {
                setFault("No existen Maquinas, por favor cree una.");
              }}
            />
            <Card
              name="Bitacora"
              image={Binnacle}
              action={() => {
                setFault("No existen Maquinas, por favor cree una.");
              }}
            />
          </>
        )}
      </section>
      <span className="fault">{fault}</span>
    </main>
  );
}

export default Home;
