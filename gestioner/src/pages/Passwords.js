import React, { useState, useEffect } from "react";
import { AppContext } from "../context";
import Card from "../components/Card";
import Modal from "../components/Modal";
import Button from "../components/Button";
import SelectOption from "../components/SelectOption";
import InputForm from "../components/InputForm";
import plus from "../images/plus.png";
import less from "../images/less.png";

function Passwords() {
  const { areas, equipos, getFireStoreData } = React.useContext(AppContext);
  const [clase, setClase] = useState("hidenModal");
  const [classe, setClasse] = useState("hidenModal");
  const [equipo, setEquipo] = useState("");
  const [area, setArea] = useState("");
  const [user, setUser] = useState("");
  const [Password, setPassword] = useState("");
  const [parte, setParte] = useState("");
  const [fault, setFault] = useState("");

  useEffect(() => {
    (async function () {
      await getFireStoreData(area);
    })();
  }, [area]);

  const showModalDel = () => {
    if (clase === "hidenModal") {
      setClase("showModal-full");
    } else {
      setClase("hidenModal");
    }
  };

  const showModalAdd = () => {
    if (area === "" || equipo === "") {
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
          <span>{fault}</span>
        </div>
      </section>
      {/* <section className="main-notify">
        <Notifier />
      </section> */}
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
              value={Password}
              action={setPassword}
              readOnly={false}
              class="inputFormOrder"
            />
          </label>
          <label>
            Dispositivo:
            <InputForm
              type="text"
              size="20"
              value={parte}
              action={setParte}
              readOnly={false}
              class="inputFormOrder"
            />
          </label>
          <div className="modalKeypad">
            <Button name="Crear" class="modalMenu" />
            <Button name="cancelar" class="modalMenu" action={showModalAdd} />
          </div>
        </div>
      </Modal>
    </main>
  );
}

export default Passwords;
