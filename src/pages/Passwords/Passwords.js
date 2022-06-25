import React, { useState, useEffect } from "react";
import { AppContext } from "../../context";

import Plus from "../../images/utils/plus.png";
import Less from "../../images/utils/less.png";
import Card from "../../components/Card/Card";
import Modal from "../../components/Modal/Modal.js";
import Button from "../../components/Buttons/Button.js";
import SelectOption from "../../components/SelectOption";
import InputForm from "../../components/InputForm";
import Viwer from "../../components/Viwer";

import database from "../../utils/fireStore";

function Passwords() {
  const LEVELS = ["Admin", "Super", "Tech", "Oper"];
  const {
    user,
    updateAreasCompany,
    areas,
    machines,
    parts,
    updateMachinesArea,
    updatePartsMachine,
  } = React.useContext(AppContext);

  const [modal, setModal] = useState([false, false]);
  const [machine, setMachine] = useState("");
  const [machineID, setMachineID] = useState("");
  const [area, setArea] = useState("");
  const [areaID, setAreaID] = useState("");
  const [newUser, setNewUser] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [part, setPart] = useState("");
  const [level, setLevel] = useState("");
  const [fault, setFault] = useState("");

  useEffect(() => {
    (async function () {
      await updateAreasCompany(user.company);
    })();
  }, []);

  function showModalDel() {
    if (!modal[0]) {
      setModal([true, false]);
    } else {
      setModal([false, false]);
    }
  }

  function showModalAdd() {
    if (area === "" || machine === "" || part === "") {
      setFault("*Debes seleccionar un area y un equipo");
    } else {
      setFault("");
      if (!modal[1]) {
        setModal([false, true]);
      } else {
        setModal([false, false]);
      }
    }
  }

  async function createPassword() {
    await database.createNewPassword(area, machine, part, user, {
      user,
      password,
      level,
      name,
    });
    setArea("");
    setMachine("");
    setPart("");
    setNewUser("");
    setName("");
    setPassword("");
    setLevel("");
    showModalAdd();
  }

  return (
    <main className="main-documents">
      <section className="main-documents--menu">
        <Card name="Nueva" image={Plus} action={showModalAdd} />
        <Card name="Eliminar" image={Less} action={showModalDel} />
      </section>
      <section>
        <div className="contBody">
          <label>
            Area:
            <SelectOption
              options={areas}
              value={area}
              action={setArea}
              actionMachines={(e) => {
                updateMachinesArea(e);
                setAreaID(e);
              }}
              type="area"
            />
          </label>
          <label>
            Maquina:
            <SelectOption
              options={machines}
              value={machine}
              action={setMachine}
              actionMachines={(e) => {
                updatePartsMachine(areaID, e);
              }}
              type="area"
            />
          </label>
          <label>
            Dispositivo:
            <SelectOption
              options={parts}
              value={part}
              action={setPart}
              type="area"
            />
          </label>
          <span>{fault}</span>
        </div>
      </section>
      {/* <Viwer area={area} machine={equipo} parte={parte} /> */}
      <Modal show={modal[0]}>
        <div className="main-modal">
          <h2>Eliminar Password </h2>
          <div className="modalKeypad">
            <Button name="Eliminar" class="modalMenu" />
            <Button name="cancelar" class="modalMenu" action={showModalDel} />
          </div>
        </div>
      </Modal>
      <Modal show={modal[1]}>
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
              value={newUser}
              action={setNewUser}
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
            <SelectOption options={LEVELS} value={level} action={setLevel} />
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
