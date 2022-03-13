import React, { useState } from "react";
import database from "../utils/fireStore";
import Auth from "../utils/autenticacion";
import { AppContext } from "../context";
import { Link } from "react-router-dom";
import "./styles/landing.css";

import information from "../images/landing/information.jpg";
import companyImg from "../images/landing/company.png";
import Button from "../components/Buttons/Button.js";
import Modal from "../components/Modal";
import InputForm from "../components/InputForm";
import Loader from "../components/Loader";

function Landing() {
  const [clase, setClase] = useState("hidenModal");
  const [next, setNext] = useState(false);
  const [claseLoader, setClaseLoader] = useState("hidenLoader");
  const [businessName, setBusinessName] = useState("");
  const [fault, setFault] = useState("");
  const { companyID, setCompanyID, adminEmail, adminPass, getCurrentDate } =
    React.useContext(AppContext);

  function showModal() {
    if (clase === "hidenModal") {
      setClase("showModal-full");
    } else {
      setClase("hidenModal");
      setCompanyID("");
      setBusinessName("");
      setFault("");
    }
  }

  async function createCompany() {
    setClaseLoader("showLoader landing");
    await Auth.authEmailPass(adminEmail, adminPass);
    const validate = await database.validateCompanyName(businessName);
    if (validate) {
      setFault("Nombre ya existe, ingresa otro");
      setBusinessName("");
      Auth.logoutUsers();
      setClaseLoader("hidenLoader");
    } else {
      let date = getCurrentDate();
      let companyRef = await database.createCompany({
        businessName,
        date,
        phone: "",
      });
      setCompanyID(companyRef);
      Auth.logoutUsers();
      setClase("hidenModal");
      setClaseLoader("hidenLoader");
      setNext(true);
    }
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
            <h1 className="card-title">Tu Codigo Empresarial</h1>
            <h1 className="card-title">{businessName}</h1>
            <h1 className="card-code">{companyID}</h1>
            <Link to="/Register">
              <Button name="Continuar a Registro" class="button--long submit" />
            </Link>
          </section>
        )}

        <Modal classe={clase}>
          <div className="main-modal">
            <h3 className="modal-title">¿Como se llama tu Empresa? </h3>
            <InputForm
              type="text"
              size="28"
              value={businessName}
              action={setBusinessName}
              readOnly={false}
              class="inputFormOrder"
            />
            <div className="modalKeypad">
              <Button
                name="Cancelar"
                class="button submitb"
                action={showModal}
              />
              <Button
                name="Crear"
                class="button submit"
                action={createCompany}
              />
            </div>
            <span className="fault">{fault}</span>
          </div>
        </Modal>
        <Loader class={claseLoader} />
      </main>
    </>
  );
}

export default Landing;
