import React, { useState, useEffect } from "react";
import { AppContext } from "../context";
import Card from "../components/Card";
import Modal from "../components/Modal";
import Button from "../components/Button";
import SelectOption from "../components/SelectOption";
import InputForm from "../components/InputForm";
import Viwer from "../components/Viwer";
import plus from "../images/plus.png";
import less from "../images/less.png";

import database from "../utils/fireStore";

function Passwords() {
  const types = ["admin", "superv", "Tech", "oper"];
  const { areas, equipos, partes, getFireStoreData } =
    React.useContext(AppContext);
  const [clase, setClase] = useState("hidenModal");
  const [classe, setClasse] = useState("hidenModal");
  const [equipo, setEquipo] = useState("");
  const [area, setArea] = useState("");
  const [user, setUser] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [parte, setParte] = useState("");
  const [type, setType] = useState("");
  const [fault, setFault] = useState("");

  useEffect(() => {
    (async function () {
      await getFireStoreData(area, equipo);
    })();
  }, [area, equipo]);

  const showModalDel = () => {
    if (clase === "hidenModal") {
      setClase("showModal-full");
    } else {
      setClase("hidenModal");
    }
  };

  const showModalAdd = () => {
    if (area === "" || equipo === "" || parte === "") {
      setFault("*Debes seleccionar un area y un equipo");
    } else {
      setFault("");
      if (classe === "hidenModal") {
        setClasse("showModal-full");
      } else {
        setClasse("hidenModal");
      }
    }
  };

  async function createPassword() {
    await database.createNewPassword(area, equipo, parte, user, {
      user,
      password,
      type,
      name,
    });
    setArea("");
    setEquipo("");
    setParte("");
    setUser("");
    setName("");
    setPassword("");
    setType("");
    showModalAdd();
  }

  return (
    <main className="main-documents">
      <section className="main-documents--menu">
        <Card name="Nueva" image={plus} action={showModalAdd} />
        <Card name="Eliminar" image={less} action={showModalDel} />
      </section>
      <section>
        <div className="contBody">
          <label>
            Area:
            <SelectOption options={areas} value={area} action={setArea} />
          </label>
          <label>
            Equipo:
            <SelectOption options={equipos} value={equipo} action={setEquipo} />
          </label>
          <label>
            Dispositivo:
            <SelectOption options={partes} value={parte} action={setParte} />
          </label>
          <span>{fault}</span>
        </div>
      </section>
      <Viwer area={area} machine={equipo} parte={parte} />
      <Modal classe={clase}>
        <div className="main-modal">
          <h2>Eliminar Password </h2>
          <div className="modalKeypad">
            <Button name="Eliminar" class="modalMenu" />
            <Button name="cancelar" class="modalMenu" action={showModalDel} />
          </div>
        </div>
      </Modal>
      <Modal classe={classe}>
        <div className="main-modal">
          <h2>Nuevo Password </h2>
          <label>
            Nombre:
            <InputForm
              type="text"
              size="20"
              value={name}
              action={setName}
              readOnly={false}
              class="inputFormOrder"
            />
          </label>
          <label>
            Usuario:
            <InputForm
              type="text"
              size="20"
              value={user}
              action={setUser}
              readOnly={false}
              class="inputFormOrder"
            />
          </label>
          <label>
            Contraseña:
            <InputForm
              type="text"
              size="20"
              value={password}
              action={setPassword}
              readOnly={false}
              class="inputFormOrder"
            />
          </label>
          <label>
            tipo:
            <SelectOption options={types} value={type} action={setType} />
          </label>
          <div className="modalKeypad">
            <Button name="Crear" class="modalMenu" action={createPassword} />
            <Button name="cancelar" class="modalMenu" action={showModalAdd} />
          </div>
        </div>
      </Modal>
    </main>
  );
}

export default Passwords;
