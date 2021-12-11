import React, { useState } from "react";
import database from "../utils/fireStore";
import Auth from "../utils/autenticacion";
import "./styles/homePage.css";
import Button from "../components/Button";
import information from "../images/information.jpg";
import Modal from "../components/Modal";
import InputForm from "../components/InputForm";

function HomePage() {
  const adminEmail = "andrescalvo9407@gmail.com";
  const adminPass = "987654321";
  const [clase, setClase] = useState("hidenModal");
  const [classe, setClasse] = useState("hidenModal");
  const [company, setCompany] = useState("");
  const [code, setCode] = useState("");

  const showModal = () => {
    if (clase === "hidenModal") {
      setClase("showModal-full");
    } else {
      setClase("hidenModal");
      setCompany("");
    }
  };

  const showModaljoin = () => {
    if (classe === "hidenModal") {
      setClasse("showModal-full");
    } else {
      setClasse("hidenModal");
      setCode("");
    }
  };

  async function createCompany() {
    await Auth.authEmailPass(adminEmail, adminPass);
    let companyID = await database.createCompany(company);
    console.log(companyID);
    Auth.logoutUsers();
    setClase("hidenModal");
    setCompany("");
  }

  return (
    <>
      <main className="main-HomePage">
        <section className="homePage-Banner">
          <figure className="homePage-Banner--first">
            <img src={information} />
          </figure>
        </section>
        <section className="homePage-keyPad">
          <Button
            name="Crear Empresa"
            class="button--long"
            action={showModal}
          />
          <Button
            name="Unirme A Empresa"
            class="button--long"
            action={showModaljoin}
          />
        </section>
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
        <Modal classe={classe}>
          <div className="main-modal">
            <h3 className="modal-title">Ingresa tu Codigo Empresarial</h3>
            <InputForm
              type="text"
              size="28"
              value={code}
              action={setCode}
              readOnly={false}
              class="inputFormOrder"
            />
            <div className="modalKeypad">
              <Button name="Crear" class="modalMenu" />
              <Button
                name="Cancelar"
                class="modalMenu"
                action={showModaljoin}
              />
            </div>
          </div>
        </Modal>
      </main>
      <footer className="footer-homePage">
        <p>Create by Andres felipe Calvo Gomez </p>
        <p>contact: 314 684 7924</p>
        <p>Jamundi - Colombi</p>
      </footer>
    </>
  );
}

export default HomePage;
