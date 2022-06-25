import React, { useState } from "react";
import database from "../../utils/fireStore";
import Auth from "../../utils/autenticacion";
import { AppContext } from "../../context";
import { Link } from "react-router-dom";
import "./Landing.css";

import companyImg from "./images/company.png";
import Button from "../../components/Buttons/Button.js";
import Modal from "../../components/Modal/Modal.js";
import InputForm from "../../components/InputForm";

function Landing() {
  const [modal, setModal] = useState(false);
  const [next, setNext] = useState(false);
  const [businessName, setBusinessName] = useState("");
  const [fault, setFault] = useState("");
  const {
    companyID,
    setCompanyID,
    adminEmail,
    adminPass,
    getCurrentDate,
    setLoading,
  } = React.useContext(AppContext);

  function showModal() {
    if (!modal) {
      setModal(true);
    } else {
      setModal(false);
      setCompanyID("");
      setBusinessName("");
      setFault("");
    }
  }

  async function createCompany() {
    setLoading(true);
    await Auth.authEmailPass(adminEmail, adminPass);
    const validate = await database.validateCompanyName(businessName);
    if (validate) {
      setFault("Nombre ya existe, ingresa otro");
      setBusinessName("");
      Auth.logoutUsers();
      setLoading(false);
    } else {
      let date = getCurrentDate();
      let companyRef = await database.createCompany({
        businessName,
        date,
        phone: "",
      });
      setCompanyID(companyRef);
      Auth.logoutUsers();
      setModal(false);
      setLoading(false);
      setNext(true);
    }
  }

  return (
    <main className="landing-main">
      {!next ? (
        <>
          <section className="landing-slogan">
            <article className="slogan-board">
              <p className="slogan-title">
                Controla los datos de tu negocio y dejalo crecer
              </p>
              <p className="slogan-message">
                Gestioner es una aplicacion de control de datos que ayuda a
                construir y crecer el negocio que amas.
              </p>
            </article>
            <Button
              name="Comenzar"
              class="button--long submitb"
              action={showModal}
            />
            <div className="triangle-equilateral-bottom-left"></div>
            <div className="triangle-equilateral-top-right"></div>
          </section>
          <section className="landing-keyPad">
            <Link to="/Login">
              <Button name="Iniciar Sesion" class="button--long submit" />
            </Link>
            <Link to="/Register">
              <Button name="Unirme a Empresa" class="button--long submit" />
            </Link>
          </section>
        </>
      ) : (
        <section className="landing-card">
          <figure className="card-img">
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
      <Modal show={modal}>
        <div className="modal-main--small">
          <h3 className="modal-title--small">* Como se llama tu Empresa? </h3>
          <div className="modal-input">
            <InputForm
              type="text"
              size="28"
              value={businessName}
              action={setBusinessName}
              readOnly={false}
              class="inputFormOrder"
            />
          </div>
          <div className="modal-Keypad">
            <Button name="Cancelar" class="button submitb" action={showModal} />
            <Button name="Crear" class="button submit" action={createCompany} />
          </div>
          <div className="modal-fault">
            <span className="fault">{fault}</span>
          </div>
        </div>
      </Modal>
    </main>
  );
}

export default Landing;
