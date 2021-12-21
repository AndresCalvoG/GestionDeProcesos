import React, { useState } from "react";
import database from "../utils/fireStore";
import Auth from "../utils/autenticacion";
import { AppContext } from "../context";
import { Link } from "react-router-dom";
import "./styles/landing.css";

import information from "../images/landing/information.jpg";
import companyImg from "../images/landing/company.png";
import Button from "../components/Button";
import Modal from "../components/Modal";
import InputForm from "../components/InputForm";

function Landing() {
  const [clase, setClase] = useState("hidenModal");
  const [company, setCompany] = useState("");
  const [next, setNext] = useState(false);
  const { companyID, setCompanyID, adminEmail, adminPass } =
    React.useContext(AppContext);

  const showModal = () => {
    if (clase === "hidenModal") {
      setClase("showModal-full");
    } else {
      setClase("hidenModal");
      setCompany("");
    }
  };

  async function createCompany() {
    await Auth.authEmailPass(adminEmail, adminPass);
    let companyID = await database.createCompany(company);
    setCompanyID(companyID);
    Auth.logoutUsers();
    setClase("hidenModal");
    setCompany("");
    setNext(true);
  }

  return (
    <>
      <main className="main-landing">
        {!next ? (
          <>
            <figure className="landing-Banner">
              <img
                src={information}
                alt="Imagen de escritorio con elementos sobre el"
              />
            </figure>
            <section className="landing-slogan">
              <p className="slogan-title">Gestioner App</p>
              <p className="slogan-message">
                Ayuda empresas a controlar y organizar su informacion
              </p>
              <p className="slogan-message">
                mejorando la rentabilidad y los tiempos de produccion
              </p>
            </section>
            <section className="landing-keyPad">
              <Link to="/Login">
                <Button name="Iniciar Sesion" class="button--long submit" />
              </Link>
              <Link to="/Register">
                <Button name="Unirme A Empresa" class="button--long submitb" />
              </Link>
              <Button
                name="Crear Empresa"
                class="button--long submit"
                action={showModal}
              />
            </section>
          </>
        ) : (
          <section className="landing-card">
            <figure>
              <img src={companyImg} alt="imagen de un edificio o empresa" />
            </figure>
            <h1 className="card-code">{companyID}</h1>
            <h1 className="card-title">Tu Codigo Empresarial</h1>
            <Link to="/Register">
              <Button name="Continuar a Registro" class="button--long" />
            </Link>
          </section>
        )}

        <Modal classe={clase}>
          <div className="main-modal">
            <h3 className="modal-title">¿Como se llama tu Empresa? </h3>
            <InputForm
              type="text"
              size="28"
              value={company}
              action={setCompany}
              readOnly={false}
              class="inputFormOrder"
            />
            <div className="modalKeypad">
              <Button name="Crear" class="modalMenu" action={createCompany} />
              <Button name="Cancelar" class="modalMenu" action={showModal} />
            </div>
          </div>
        </Modal>
      </main>
    </>
  );
}

export default Landing;
