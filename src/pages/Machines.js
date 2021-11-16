import React, { useState } from "react";
import Card from "../components/Card";
import Modal from "../components/Modal";
import Button from "../components/Button";
import "./styles/machines.css";
import plus from "../images/plus.png";
import less from "../images/less.png";

function Machines() {
  const [clase, setClase] = useState("hidenModal");
  const [classe, setClasse] = useState("hidenModal");

  const showModalDel = () => {
    if (clase === "hidenModal") {
      setClase("showModal-full");
    } else {
      setClase("hidenModal");
    }
  };

  const showModalAdd = () => {
    if (classe === "hidenModal") {
      setClasse("showModal-full");
    } else {
      setClasse("hidenModal");
    }
  };

  return (
    <main className="main-machines">
      <section className="machines-content">
        <Card name="Nueva" image={plus} action={showModalAdd} />
        <Card name="Eliminar" image={less} action={showModalDel} />
      </section>
      <Modal classe={clase}>
        <div className="main-modal">
          <h2>Eliminar Maquina </h2>
          <div className="modalKeypad">
            <Button name="Eliminar" class="modalMenu" />
            <Button name="cancelar" class="modalMenu" action={showModalDel} />
          </div>
        </div>
      </Modal>
      <Modal classe={classe}>
        <div className="main-modal">
          <h2>Nuevo Maquina </h2>
          <div className="modalKeypad">
            <Button name="Crear" class="modalMenu" />
            <Button name="cancelar" class="modalMenu" action={showModalAdd} />
          </div>
        </div>
      </Modal>
    </main>
  );
}

export default Machines;
