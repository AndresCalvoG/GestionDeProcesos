import React from "react";
import { AppContext } from "../context";

import { useHistory } from "react-router-dom";
import "./styles/home.css";

import Card from "../components/Card";

const Home = () => {
  const Documents =
    "https://firebasestorage.googleapis.com/v0/b/gestion-de-procesoso-tq.appspot.com/o/root%2Fimages%2Fhome%2FDocuments.png?alt=media&token=710e605d-8b99-4377-aadc-365abf73dbf9";
  const Manuals =
    "https://firebasestorage.googleapis.com/v0/b/gestion-de-procesoso-tq.appspot.com/o/root%2Fimages%2Fhome%2Fmanual.png?alt=media&token=15841494-fac0-4680-8241-c6aa7a77c475";
  const Machines =
    "https://firebasestorage.googleapis.com/v0/b/gestion-de-procesoso-tq.appspot.com/o/root%2Fimages%2Fhome%2Fmaquina.png?alt=media&token=dbcd014d-0aca-42f4-ae26-d6656d569af2";
  const Calendar =
    "https://firebasestorage.googleapis.com/v0/b/gestion-de-procesoso-tq.appspot.com/o/root%2Fimages%2Fhome%2Fcalendar.png?alt=media&token=7028e627-ea2f-40e9-8723-ff195b46b192";
  const Help =
    "https://firebasestorage.googleapis.com/v0/b/gestion-de-procesoso-tq.appspot.com/o/root%2Fimages%2Fhome%2Fhelp.png?alt=media&token=f26dee14-a9ad-4239-8f11-3116f35a861d";
  const Schedule =
    "https://firebasestorage.googleapis.com/v0/b/gestion-de-procesoso-tq.appspot.com/o/root%2Fimages%2Fhome%2Fhorario-de-trabajo.png?alt=media&token=2cb1b341-ddef-460c-9b95-df07974d28fd";
  const Binnacle =
    "https://firebasestorage.googleapis.com/v0/b/gestion-de-procesoso-tq.appspot.com/o/root%2Fimages%2Fhome%2FBitacora.jpg?alt=media&token=d64482e0-c0de-43e5-89c5-76ce4257f99c";
  const Passwords =
    "https://firebasestorage.googleapis.com/v0/b/gestion-de-procesoso-tq.appspot.com/o/root%2Fimages%2Fhome%2Fpassword.svg?alt=media&token=1e6ac292-e297-4231-b9fb-c355c1379725";
  const history = useHistory();
  history.listen((location, action) => {
    if (action === "POP" && location.pathname === "/Loader") {
      console.log(action, location.pathname, location.state);
    }
  });
  const { nameCompany } = React.useContext(AppContext);

  return (
    <main className="main-home">
      <h1 className="home-title">{nameCompany}</h1>
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
};

export default Home;
