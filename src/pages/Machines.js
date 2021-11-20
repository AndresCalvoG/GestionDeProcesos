import React, { useState } from "react";
import Card from "../components/Card";
import Modal from "../components/Modal";
import Button from "../components/Button";
import InputForm from "../components/InputForm";
import "./styles/machines.css";
import plus from "../images/plus.png";
import less from "../images/less.png";

function Machines() {
  const [clase, setClase] = useState("hidenModal");
  const [classe, setClasse] = useState("hidenModal");
  const [claseData, setClaseData] = useState("hidenModal");
  const [claseSelect, setClaseSelect] = useState("hidenModal");
  const [photoName, setPhotoName] = useState("");
  const [photo, setPhoto] = useState("");
  const [file, setFile] = useState("");
  const [fault, setFault] = useState("");
  const [type, setType] = useState("");
  const [refer, setRefer] = useState("");
  const [area, setArea] = useState("");
  const [cubiculo, setCubiculo] = useState("");
  const [display, setDisplay] = useState([false, false]);
  const [marca, setMarca] = useState("");
  const [camera, setCamera] = useState([false, false]);
  const [marcam, setMarcam] = useState("");

  const showModalDel = () => {
    if (clase === "hidenModal") {
      setClase("showModal-full");
    } else {
      setClase("hidenModal");
    }
  };

  const showModalAdd = () => {
    setFault("");
    if (classe === "hidenModal") {
      setClasse("showModal-full");
    } else {
      setClasse("hidenModal");
    }
  };
  function showModalData() {
    setClasse("hidenModal");
    setClaseData("showModal-full");
  }
  function showModalSelect() {
    setClaseData("hidenModal");
    setClaseSelect("showModal-full");
  }

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
          <div className="modalKeypad">
            <Button name="siguiente" class="modalMenu" action={showModalData} />
            <Button name="cancelar" class="modalMenu" action={showModalAdd} />
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
              value={cubiculo}
              action={setCubiculo}
              readOnly={false}
              class="inputFormOrder"
            />
          </label>
          <br />
          <div className="modalKeypad">
            <Button
              name="Siguiente"
              class="modalMenu"
              action={showModalSelect}
            />
            <Button
              name="Atras"
              class="modalMenu"
              action={() => {
                setClasse("showModal-full");
                setClaseData("hidenModal");
              }}
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
                value={marca}
                action={setMarca}
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
                value={marcam}
                action={setMarcam}
                readOnly={false}
                class="inputFormOrder"
              />
            </label>
          ) : (
            <p></p>
          )}
          <div className="modalKeypad">
            <Button name="siguiente" class="modalMenu" action={showModalData} />
            <Button
              name="atras"
              class="modalMenu"
              action={() => {
                setClaseData("showModal-full");
                setClaseSelect("hidenModal");
              }}
            />
          </div>
        </div>
      </Modal>
    </main>
  );
}

export default Machines;
