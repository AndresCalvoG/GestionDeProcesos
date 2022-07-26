import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

import Auth from "../../utils/autenticacion";
import database from "../../utils/fireStore";
import { AppContext } from "../../context";
import { Link } from "react-router-dom";
import "./Landing.css";

import companyImg from "./images/company.png";
import arrowBlue from "./images/fast-forward-blue.png";
import Button from "../../components/Buttons/Button.js";
import Modal from "../../components/Modal/Modal.js";
import InputForm from "../../components/InputForm";

const StyledMain = styled.main`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const Slogan = styled.section`
  width: 95%;
  max-width: 50rem;
  height: 54rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: var(--white);
  background-color: var(--blue);
  margin-top: 1rem;
  border-radius: 20px;
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
`;
const slogan = keyframes`
from {
    transform: translateY(-400px);
  }
  to {
    transform: translate(0px);
  }
`;
const Message = styled.article`
  width: 100%;
  height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  animation: ${slogan} 1.5s ease-in-out;

  p:first-child {
    font-size: 4rem;
    text-align: center;
    font-weight: bold;
  }
  p:nth-child(2) {
    margin-top: 2rem;
    font-size: 1.8rem;
    text-align: center;
  }
`;

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
    <StyledMain /*className="landing-main"*/>
      {!next ? (
        <>
          <Slogan /*className="landing-slogan"*/>
            <Message /*className="landing-slogan--text"*/>
              <p>Controla los datos de tu negocio y dejalo crecer</p>
              <p>
                Gestioner es una aplicacion de control de datos que ayuda a
                construir y crecer el negocio que amas.
              </p>
            </Message>
            <article className="landing-keypad">
              <Button
                name="Comenzar"
                class="button--long submitb"
                action={showModal}
              />
              <Link to="/Login">
                <Button name="Iniciar Sesion" class="button--long submitb" />
              </Link>
              <Link to="/Register">
                <Button name="Unirme a Empresa" class="button--long submitb" />
              </Link>
            </article>
          </Slogan>
          <article className="landing-arrow">
            <Link to="/Blog">
              <p>Ver Blog</p>
              <img src={arrowBlue} alt="link a blog" />
            </Link>
          </article>
        </>
      ) : (
        <section className="landing-success">
          <figure>
            <img src={companyImg} alt="imagen de un edificio o empresa" />
          </figure>
          <article className="landing-success--info">
            <p>Tu Codigo Empresarial es:</p>
            <p>{businessName}</p>
            <p>{companyID}</p>
            <Link to="/Register">
              <Button name="Continuar a Registro" class="button--long submit" />
            </Link>
          </article>
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
    </StyledMain>
  );
}

export default Landing;
