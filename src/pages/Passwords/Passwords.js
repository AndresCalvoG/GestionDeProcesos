import React, { useState, useEffect } from "react";
import { AppContext } from "../../context";
import "./passwords.css";

import Plus from "../../images/utils/plus.png";
import Less from "../../images/utils/less.png";
import Card from "../../components/Card/Card";
import Modal from "../../components/Modal/Modal.js";
import Button from "../../components/Buttons/Button.js";
import SelectOption from "../../components/SelectOption";
import InputForm from "../../components/InputForm";

import database from "../../utils/fireStore";

function Passwords() {
  const LEVELS = ["ADMINISTRATOR", "SUPERVISOR", "TECHNICAL", "OPERATOR"];
  const {
    user,
    updateAreasCompany,
    areas,
    machines,
    parts,
    updateMachinesArea,
    updatePartsMachine,
    setLoading,
  } = React.useContext(AppContext);

  const [modal, setModal] = useState([false, false]);
  const [machine, setMachine] = useState("");
  const [machineID, setMachineID] = useState("");
  const [area, setArea] = useState("");
  const [areaID, setAreaID] = useState("");
  const [User, setUser] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [part, setPart] = useState("");
  const [partID, setPartID] = useState("");
  const [level, setLevel] = useState("");
  const [fault, setFault] = useState("");
  const [passwords, setPasswords] = useState([]);
  const [passToDelete, setPassToDelete] = useState("");
  //const [personal, setPersonal] = useState(false);

  useEffect(() => {
    (async function () {
      await updateAreasCompany(user.company);
    })();
  }, [updateAreasCompany, user.company]);

  function showModalDel() {
    if (user.privilege === "Administrador") {
      if (area === "" || machine === "" || part === "") {
        setFault("*Debes seleccionar un area, un equipo y un dispositivo");
      } else {
        setFault("");
        getPasswords();
        if (!modal[0]) {
          setModal([true, false]);
        } else {
          setModal([false, false]);
        }
      }
    } else {
      setFault("not permision");
    }
  }

  function showModalAdd() {
    if (area === "" || machine === "" || part === "") {
      setFault("*Debes seleccionar un area, un equipo y un dispositivo");
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
    setLoading(true);
    await database.createNewPassword(user.company, areaID, machineID, partID, {
      User,
      password,
      level,
      name,
    });
    setArea("");
    setMachine("");
    setPart("");
    setUser("");
    setName("");
    setPassword("");
    setLevel("");
    showModalAdd();
    setLoading(false);
  }
  async function getPasswords() {
    if (areaID === "" || machineID === "" || partID === "") {
      setPasswords([]);
      setFault("*Debes seleccionar un area, un equipo y un dispositivo");
    } else {
      setLoading(true);
      let passwordsRef = await database.getPasswords(
        user.company,
        areaID,
        machineID,
        partID
      );
      if (
        passwordsRef._delegate._document.data.value.mapValue.fields.passwords
      ) {
        if (
          !passwordsRef._delegate._document.data.value.mapValue.fields.passwords
            .arrayValue.values
        ) {
          setPasswords([]);
          setFault("No hay contraseñas");
          setLoading(false);
          return;
        } else {
          let arrayPasswords =
            passwordsRef._delegate._document.data.value.mapValue.fields
              .passwords.arrayValue.values;
          let arrayPass = arrayPasswords.map((element) => {
            let item = {
              User: element.mapValue.fields.User.stringValue,
              level: element.mapValue.fields.level.stringValue,
              name: element.mapValue.fields.name.stringValue,
              password: element.mapValue.fields.password.stringValue,
              id: element.mapValue.fields.name.stringValue,
            };
            return item;
          });
          setPasswords(arrayPass);
          setLoading(false);
        }
      } else {
        setLoading(false);
        setFault("No hay contraseñas");
        setPasswords([]);
      }
    }
  }
  async function deletePassword() {
    setLoading(true);
    await database.deletePassword(
      user.company,
      areaID,
      machineID,
      partID,
      passToDelete
    );
    setArea("");
    setMachine("");
    setPart("");
    setUser("");
    setName("");
    setPassword("");
    setLevel("");
    setLoading(false);
    setModal([false, false]);
    getPasswords();
  }

  return (
    <main className="passwords-main">
      <section className="passwords-controls">
        <Card name="Nueva" image={Plus} action={showModalAdd} />
        <Card name="Eliminar" image={Less} action={showModalDel} />
      </section>
      <section className="passwords-container">
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
              setMachineID(e);
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
            actionMachines={(e) => {
              setPartID(e);
            }}
            type="area"
          />
        </label>
        <Button name="Buscar" class="button submit" action={getPasswords} />
        <span className="fault">{fault}</span>
      </section>
      <section className="passwords-viwer">
        <h1>Contraseñas</h1>
        {passwords.map((element) => {
          return (
            <article className="passwords-viwer-info" key={element.id}>
              <p>
                <b>Nombre:</b> {element.name}
              </p>
              <p>
                <b>Usuario:</b> {element.User}
              </p>
              <p>
                <b>Contraseña:</b> {element.password}
              </p>
              <p>
                <b>Nivel:</b> {element.level}
              </p>
            </article>
          );
        })}
      </section>
      <Modal show={modal[0]}>
        <div className="modal-main">
          <h2>Eliminar Password </h2>
          <label>
            Passwords:
            <SelectOption
              options={passwords}
              value={passToDelete}
              action={setPassToDelete}
              actionMachines={(e) => {
                console.log("");
              }}
              type="area"
            />
          </label>
          <div className="modal-Keypad">
            <Button
              name="Eliminar"
              class="button submit"
              action={deletePassword}
            />
            <Button
              name="cancelar"
              class="button submitb"
              action={showModalDel}
            />
          </div>
        </div>
      </Modal>
      <Modal show={modal[1]}>
        <div className="modal-main">
          <h3>Nuevo Password </h3>
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
              value={User}
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
            <SelectOption options={LEVELS} value={level} action={setLevel} />
          </label>
          {/* <label>
            Personal:
            <input
              type="checkbox"
              value={personal}
              onChange={(e) => {
                setPersonal(e.target.checked);
              }}
            />
          </label> */}
          <div className="modal-Keypad">
            <Button
              name="Crear"
              class="button submit"
              action={createPassword}
            />
            <Button
              name="cancelar"
              class="button submitb"
              action={showModalAdd}
            />
          </div>
        </div>
      </Modal>
    </main>
  );
}

export default Passwords;
