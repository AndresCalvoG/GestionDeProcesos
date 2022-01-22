import React, { useState, useEffect } from "react";
import { AppContext } from "../context";
import storage from "../utils/storege";
import database from "../utils/fireStore";
import "./styles/machines.css";

import Plus from "../images/utils/plus.png";
import Less from "../images/utils/less.png";
import Machine from "../images/home/maquina.png";
import Card from "../components/Card";
import Modal from "../components/Modal";
import Button from "../components/Button";
import InputForm from "../components/InputForm";
import Loader from "../components/Loader";

function Machines() {
  const { user, updateAreasCompany, machines } = React.useContext(AppContext);
  const [clase, setClase] = useState("hidenLoader");
  const [dell, setDell] = useState("hidenModal");
  const [classe, setClasse] = useState("hidenModal");
  const [claseData, setClaseData] = useState("hidenModal");
  const [claseSelect, setClaseSelect] = useState("hidenModal");
  const [photoName, setPhotoName] = useState("");
  const [photo, setPhoto] = useState(Machine);
  const [file, setFile] = useState("");
  const [fault, setFault] = useState("");
  const [type, setType] = useState("");
  const [refer, setRefer] = useState("");
  const [area, setArea] = useState("");
  const [cubicle, setCubicle] = useState("");
  const [display, setDisplay] = useState([false, false]);
  const [hmi, setHmi] = useState("");
  const [camera, setCamera] = useState([false, false]);
  const [camara, setCamara] = useState("");

  useEffect(() => {
    (async function () {
      await updateAreasCompany(user.company);
    })();
  }, []);

  const showModalDel = () => {
    if (user.privilege === "Administrador") {
      if (dell === "hidenModal") {
        setDell("showModal-full");
      } else {
        setDell("hidenModal");
      }
    } else {
      setFault("not permision");
    }
  };

  const showModalAdd = () => {
    if (classe === "hidenModal") {
      setClasse("showModal-full");
    } else {
      setClasse("hidenModal");
      setPhotoName("");
      setPhoto(Machine);
      setFile("");
    }
  };

  function showModalData() {
    if (photoName === "" || file === "") {
      setClasse("showModal-full");
      setClaseData("hidenModal");
      setFault("Selecciona una foto primero");
    } else {
      setFault("");
      setClasse("hidenModal");
      setClaseData("showModal-full");
    }
  }

  function showModalSelect() {
    if (type === "" || refer === "" || area === "" || cubicle === "") {
      setClaseData("showModal-full");
      setClaseSelect("hidenModal");
      setFault("Completa todos los campos");
    } else {
      setClaseData("hidenModal");
      setClaseSelect("showModal-full");
      setFault("");
    }
  }

  async function createMachine() {
    if (
      (display[0] === false && display[1] === false) ||
      (camera[0] === false && camera[1] === false)
    ) {
      setFault("Completa los campos de Si o No");
    } else if (display[0] === true && hmi === "") {
      setFault("completa la marca del HMI");
    } else if (camera[0] === true && camara === "") {
      setFault("completa la marca de la camara");
    } else {
      setFault("");
      setClaseSelect("hidenModal");
      setClase("showLoader machine");
      let imageURL = await storage.uploadMachinePhoto(
        user.company,
        file,
        refer
      );
      setPhoto(Machine);
      let areaRef = await database.createNewArea(user.company, area);
      let equipoRef = await database.createNewMachine(
        user.company,
        areaRef.id,
        refer
      );
      await database.addDataMachine(
        user.company,
        areaRef.id,
        equipoRef.id,
        { hmi },
        { camara },
        { imageURL, type, cubicle }
      );
      setClase("hidenLoader");
    }
  }

  return (
    <main className="main-machines">
      <section className="machines-controls">
        <Card name="Nueva" image={Plus} action={showModalAdd} />
        <Card name="Eliminar" image={Less} action={showModalDel} />
      </section>
      <section className="machines-content">
        <Card type="area">
          {machines.map((element) => {
            return (
              <Card
                name={element.name}
                image={element.imageURL}
                tipo={element.type}
                cub={element.cubicle}
                type="machine"
              />
            );
          })}
        </Card>
      </section>
      <span className="fault">{fault}</span>
      <Loader class={clase} />
      <Modal classe={dell}>
        <div className="main-modal">
          <h2>Eliminar Maquina </h2>
          <div className="modalKeypad">
            <Button name="Eliminar" class="button submitb" />
            <Button
              name="Cancelar"
              class="button submit"
              action={showModalDel}
            />
          </div>
        </div>
      </Modal>
      <Modal classe={classe}>
        <div className="main-modal">
          <h4>Toma una foto horizontalmente </h4>
          <figure className="modal-image">
            <img id="photo" src={photo} alt="Imagen de Maquina" />
          </figure>
          <InputForm
            type="file"
            value={photoName}
            action={setPhotoName}
            File={setFile}
            currentPhoto={setPhoto}
            readOnly={false}
            class="inputForm"
          />
          <span className="fault">{fault}</span>
          <div className="modalKeypad">
            <Button
              name="Cancelar"
              class="button submitb"
              action={showModalAdd}
            />
            <Button
              name="Siguiente"
              class="button submit"
              action={showModalData}
            />
          </div>
        </div>
      </Modal>
      <Modal classe={claseData}>
        <div className="main-modal">
          <h4>Completa la informacion </h4>
          <br />
          <br />
          <label>
            Tipo:
            <InputForm
              type="text"
              size="20"
              value={type}
              action={setType}
              readOnly={false}
              class="inputFormOrder"
            />
          </label>
          <label>
            Referencia:
            <InputForm
              type="text"
              size="20"
              value={refer}
              action={setRefer}
              readOnly={false}
              class="inputFormOrder"
            />
          </label>
          <label>
            Area:
            <InputForm
              type="text"
              size="20"
              value={area}
              action={setArea}
              readOnly={false}
              class="inputFormOrder"
            />
          </label>
          <label>
            Cubiculo:
            <InputForm
              type="text"
              size="20"
              value={cubicle}
              action={setCubicle}
              readOnly={false}
              class="inputFormOrder"
            />
          </label>
          <br />
          <span className="fault">{fault}</span>
          <div className="modalKeypad">
            <Button
              name="Atras"
              class="button submitb"
              action={() => {
                setClasse("showModal-full");
                setClaseData("hidenModal");
                setFault("");
              }}
            />
            <Button
              name="Siguiente"
              class="button submit"
              action={showModalSelect}
            />
          </div>
        </div>
      </Modal>
      <Modal classe={claseSelect}>
        <div className="main-modal">
          <h4>Selecciona los componentes </h4>
          <br />
          <div className="modal-select">
            <p>¿Tiene Pantalla HMI?</p>
            <label>
              Si
              <InputForm
                type="checkbox"
                value={display[0]}
                action={setDisplay}
                index={0}
                array={display.length}
              />
            </label>
            <label>
              No
              <InputForm
                type="checkbox"
                value={display[1]}
                action={setDisplay}
                index={1}
                array={display.length}
              />
            </label>
          </div>
          <br />
          {display[0] ? (
            <label>
              Marca:
              <InputForm
                type="text"
                size="20"
                value={hmi}
                action={setHmi}
                readOnly={false}
                class="inputFormOrder"
              />
            </label>
          ) : (
            <p></p>
          )}
          <br />
          <div className="modal-select">
            <p>¿Tiene Camara?</p>
            <label>
              Si
              <InputForm
                type="checkbox"
                value={camera[0]}
                action={setCamera}
                index={0}
                array={camera.length}
              />
            </label>
            <label>
              No
              <InputForm
                type="checkbox"
                value={camera[1]}
                action={setCamera}
                index={1}
                array={camera.length}
              />
            </label>
          </div>
          <br />
          {camera[0] ? (
            <label>
              Marca:
              <InputForm
                type="text"
                size="20"
                value={camara}
                action={setCamara}
                readOnly={false}
                class="inputFormOrder"
              />
            </label>
          ) : (
            <p></p>
          )}
          <span className="fault">{fault}</span>
          <div className="modalKeypad">
            <Button
              name="Atras"
              class="button submitb"
              action={() => {
                setFault("");
                setClaseData("showModal-full");
                setClaseSelect("hidenModal");
              }}
            />
            <Button
              name="Finalizar"
              class="button submit"
              action={createMachine}
            />
          </div>
        </div>
      </Modal>
    </main>
  );
}

export default Machines;
