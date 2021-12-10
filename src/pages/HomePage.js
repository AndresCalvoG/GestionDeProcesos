import React, { useState } from "react";
import "./styles/homePage.css";
import Button from "../components/Button";
import information from "../images/information.jpg";
import Modal from "../components/Modal";
import InputForm from "../components/InputForm";

function HomePage() {
  const [clase, setClase] = useState("hidenModal");
  const [company, setCompany] = useState("");

  const showModal = () => {
    if (clase === "hidenModal") {
      setClase("showModal-full");
    } else {
      setClase("hidenModal");
    }
  };

  return (
    <>
      <main className="main-HomePage">
        <section className="homePage-Banner">
          <figure className="homePage-Banner--first">
            <img src={information} />
          </figure>
        </section>
        <section className="homePage-info">
          <p>
            Aqui puedes trabajar y ordenar mucho de la gestion en tu empresa
          </p>
        </section>
        <section className="homePage-keyPad">
          <Button
            name="Crear Empresa"
            class="button--long"
            action={showModal}
          />
          <Button name="Unirme A Empresa" class="button--long" />
        </section>
        <Modal classe={clase}>
          <div className="main-modal">
            <h2>¿Como se llama tu Empresa? </h2>
            <div className="modalKeypad">
              <InputForm
                type="text"
                size="20"
                value={company}
                action={setCompany}
                readOnly={false}
                class="inputFormOrder"
              />
              <Button name="Crear" class="modalMenu" />
              <Button name="cancelar" class="modalMenu" />
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
