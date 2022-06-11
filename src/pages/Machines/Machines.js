import React, { useState, useEffect } from "react";
import { AppContext } from "../../context";
import storage from "../../utils/storege";
import database from "../../utils/fireStore";
import "./machines.css";

import Plus from "../../images/utils/plus.png";
import Less from "../../images/utils/less.png";
import Machine from "../Home/images/maquina.png";
import Card from "../../components/Card/Card";
import Modal from "../../components/Modal/Modal.js";
import Button from "../../components/Buttons/Button.js";
import InputForm from "../../components/InputForm";
import SelectOption from "../../components/SelectOption";

function Machines() {
  const {
    company,
    user,
    updateAreasCompany,
    machines,
    updateMachinesArea,
    areas,
    setLoading,
    loading,
  } = React.useContext(AppContext);
  const [dell, setDell] = useState("modal-hiden");
  const [classe, setClasse] = useState("modal-hiden");
  const [claseData, setClaseData] = useState("modal-hiden");
  const [claseSelect, setClaseSelect] = useState("modal-hiden");
  const [photoName, setPhotoName] = useState("");
  const [photo, setPhoto] = useState(Machine);
  const [file, setFile] = useState("");
  const [type, setType] = useState("");
  const [refer, setRefer] = useState("");
  const [area, setArea] = useState("");
  const [cubicle, setCubicle] = useState("");
  const [display, setDisplay] = useState([false, false]);
  const [hmi, setHmi] = useState("");
  const [camera, setCamera] = useState([false, false]);
  const [camara, setCamara] = useState("");
  const [machineToDelete, setMachineToDelete] = useState("");
  const [areaToDelete, setAreaToDelete] = useState("");
  const [showMachines, setShowMachines] = useState("hiden");
  const [fault, setFault] = useState("");

  useEffect(() => {
    (async function () {
      await updateAreasCompany(user.company);
    })();
  }, [loading]);

  function showModalDel() {
    if (user.privilege === "Administrador") {
      if (dell === "modal-hiden") {
        setDell("modal-full");
      } else {
        setDell("modal-hiden");
        setFault("");
        setArea("");
        setRefer("");
      }
    } else {
      setFault("not permision");
    }
  }

  function showModalAdd() {
    setFault("");
    if (classe === "modal-hiden") {
      setClasse("modal-full");
    } else {
      setClasse("modal-hiden");
      setPhotoName("");
      setPhoto(Machine);
      setFile("");
    }
  }

  function showModalData() {
    if (photoName === "" || file === "") {
      setClasse("modal-full");
      setClaseData("modal-hiden");
      setFault("Selecciona una foto primero");
    } else {
      setFault("");
      setClasse("modal-hiden");
      setClaseData("modal-full");
    }
  }

  function showModalSelect() {
    if (type === "" || refer === "" || area === "" || cubicle === "") {
      setClaseData("modal-full");
      setClaseSelect("modal-hiden");
      setFault("Completa todos los campos");
    } else {
      setClaseData("modal-hiden");
      setClaseSelect("modal-full");
      setFault("");
    }
  }
  async function createMachine(areaId) {
    let equipoRef = await database.createNewMachine(
      user.company,
      areaId,
      refer
    );
    let imageURL = await storage.uploadMachinePhoto(user.company, file, refer);
    await database.addDataMachine(
      user.company,
      areaId,
      equipoRef.id,
      { hmi },
      { camara },
      { imageURL, type, cubicle }
    );
    setPhotoName("");
    setPhoto(Machine);
    setFile("");
    setType("");
    setRefer("");
    setArea("");
    setCubicle("");
    setDisplay([false, false]);
    setHmi("");
    setCamera([false, false]);
    setCamara("");
    setLoading(false);
  }

  async function validateMachine() {
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
      setClaseSelect("modal-hiden");
      setLoading(true);
      let currentArea = await database.validateAreaName(company.id, area);
      if (currentArea) {
        let currentMachine = await database.validateMachineName(
          company.id,
          currentArea.id,
          refer
        );
        if (currentMachine) {
          setFault("Maquina ya existe");
          setPhotoName("");
          setPhoto(Machine);
          setFile("");
          setType("");
          setRefer("");
          setArea("");
          setCubicle("");
          setDisplay([false, false]);
          setHmi("");
          setCamera([false, false]);
          setCamara("");
          setLoading(false);
        } else {
          await createMachine(currentArea.id);
        }
      } else {
        let areaRef = await database.createNewArea(user.company, area);
        await createMachine(areaRef.id);
      }
    }
  }

  async function deleteMachine() {
    if (area === "" || refer === "") {
      setFault("Completa los campos");
    } else {
      setLoading(true);
      database.deleteMachine(company.id, areaToDelete, machineToDelete);
      storage.deleteMachinePhoto(company.id, refer);
      setDell("modal-hiden");
      setArea("");
      setRefer("");
      setLoading(false);
    }
  }

  return (
    <main className="machines-main">
      <section className="machines-controls">
        <Card name="Nueva" image={Plus} action={showModalAdd} />
        <Card name="Eliminar" image={Less} action={showModalDel} />
      </section>
      <section className="machines-content">
        <Card type="area" class={showMachines} show={setShowMachines}>
          {machines.map((element) => {
            if (element.empty) {
              return <p className="empty">No existen maquinas en esta area</p>;
            } else {
              return (
                <Card
                  name={element.name}
                  image={element.imageURL}
                  tipo={element.type}
                  cub={element.cubicle}
                  key={element.id}
                  type="machine"
                />
              );
            }
          })}
        </Card>
      </section>
      <span className="fault">{fault}</span>

      <Modal classe={dell}>
        <div className="modal-main">
          <h2>Eliminar Maquina </h2>
          <label className="modal-label">
            <h1>Area:</h1>
            <SelectOption
              options={areas}
              value={area}
              action={setArea}
              actionMachines={(e) => {
                updateMachinesArea(e);
                setAreaToDelete(e);
              }}
              type="area"
            />
          </label>
          <label className="modal-label">
            <h1>Maquina:</h1>
            <SelectOption
              options={machines}
              value={refer}
              action={setRefer}
              actionMachines={setMachineToDelete}
              type="area"
            />
          </label>
          <span className="fault">{fault}</span>
          <div className="modal-Keypad">
            <Button
              name="Eliminar"
              class="button submitb"
              action={deleteMachine}
            />
            <Button
              name="Cancelar"
              class="button submit"
              action={showModalDel}
            />
          </div>
        </div>
      </Modal>
      <Modal classe={classe}>
        <div className="modal-main">
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
          <div className="modal-Keypad">
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
        <div className="modal-main">
          <h4>Completa la informacion </h4>
          <br />
          <br />
          <label className="modal-label">
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
          <label className="modal-label">
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
          <label className="modal-label">
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
          <label className="modal-label">
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
          <div className="modal-Keypad">
            <Button
              name="Atras"
              class="button submitb"
              action={() => {
                setClasse("modal-full");
                setClaseData("modal-hiden");
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
        <div className="modal-main">
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
                readOnly={display[0] ? false : true}
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
          <div className="modal-Keypad">
            <Button
              name="Atras"
              class="button submitb"
              action={() => {
                setFault("");
                setClaseData("modal-full");
                setClaseSelect("modal-hiden");
              }}
            />
            <Button
              name="Finalizar"
              class="button submit"
              action={validateMachine}
            />
          </div>
        </div>
      </Modal>
    </main>
  );
}

export default Machines;
