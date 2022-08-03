import React, { useState } from "react";
import Styled, { keyframes } from "styled-components";

import Auth from "../../utils/autenticacion";
import database from "../../utils/fireStore";
import { AppContext } from "../../context";
import { Link } from "react-router-dom";

//images
import companyImg from "./images/company.png";
import arrowBlue from "./images/fast-forward-blue.png";
//components
import Button from "../../components/Buttons/Button.js";
import Modal from "../../components/Modal/Modal.js";
import InputForm from "../../components/InputForm";

//styles main screen
const StyledMain = Styled.main`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const Slogan = Styled.section`
  width: 87.5%;
  max-width: 50rem;
  height: 90rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: var(--white);
  background-color: var(--blue);
  margin-top: 2rem;
  padding: 4rem;
  border-radius: 20px;
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  @media (min-width: 1024px) {
    height: 85rem;
  }
`;
const slogan = keyframes`
from {
    transform: translateY(-400px);
  }
  to {
    transform: translate(0px);
  }
`;
const Message = Styled.article`
  width: 100%;
  height: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  animation: ${slogan} 1.5s ease-in-out;

  p:first-child {
    width: 100%;
    height: 25rem;
    display: flex;
    align-items: center;
    font-size: 4rem;
    text-align: center;
    font-weight: bold;
  }
  p:last-child {
    width: 100%;
    height: 15rem;
    display: flex;
    align-items: center;
    font-size: 1.8rem;
    text-align: center;
  }
`;
const keypad = keyframes`
from {
    transform: translateY(1000px);
  }
  to {
    transform: translateY(0);
  }
`;
const Keypad = Styled.article`
  width: 100%;
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  animation: ${keypad} 1.5s ease-in-out;
  margin-top: 2rem;
`;
//styles success screen
const figure = keyframes`
from {
    transform: translateX(-1000px);
  }
  to {
    transform: translateX(0);
  }
`;
const Success = Styled.section`
  width: 100%;
  max-width: 55rem;
  height: 100%;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  figure {
    width: 80%;
    max-width: 35rem;
    animation: ${figure} 1.5s ease-in-out;
  }
  article {
    width: 100%;
    height: 25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
  p:first-child {
    font-size: 2.5rem;
    font-weight: bold;
  }
  p {
    font-size: 2rem;
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
    if (businessName === "") {
      setFault("Complete todos los campos");
    } else {
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
  }

  return (
    <StyledMain>
      {!next ? (
        <Slogan>
          <Message>
            <p>
              Controla los datos de tu negocio y dejalo
              <br /> crecer
            </p>
            <p>
              Gestioner es una aplicacion de control de datos que ayuda a
              construir y crecer el negocio que amas.
            </p>
          </Message>
          <Link to="/Blog">
            <Button type="withImage">
              <p>Ver Blog</p>
              <img src={arrowBlue} alt="link a blog" />
            </Button>
          </Link>
          <Keypad>
            <Button
              name="Comenzar"
              type="long"
              invertColor={false}
              action={showModal}
            />
            <Link to="/Login">
              <Button name="Iniciar Sesion" type="long" />
            </Link>
            <Link to="/Register">
              <Button name="Unirme a Empresa" type="long" />
            </Link>
          </Keypad>
        </Slogan>
      ) : (
        <Success>
          <figure>
            <img src={companyImg} alt="imagen de un edificio o empresa" />
          </figure>
          <article>
            <p>Tu Codigo Empresarial es:</p>
            <p>{businessName}</p>
            <p>{companyID}</p>
            <Link to="/Register">
              <Button name="Continuar a Registro" type="long" />
            </Link>
          </article>
        </Success>
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
            <Button
              name="Cancelar"
              type="basic"
              invertColor={false}
              action={showModal}
            />
            <Button
              name="Crear"
              type="basic"
              invertColor={true}
              action={createCompany}
            />
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
