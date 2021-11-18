import React, { useState } from "react";
import ImageUser from "../components/ImageUser";
import Modal from "../components/Modal";
import Button from "../components/Button";
import InputForm from "../components/InputForm";
import { AppContext } from "../context";
import "./styles/profile.css";
import Auth from "../utils/autenticacion";
import storage from "../utils/storege";

function Profile() {
  const { user, getDataUsers, setPhotoUrl } = React.useContext(AppContext);
  const [photo, setPhoto] = useState("");
  const [file, setFile] = useState("");
  const [clase, setClase] = useState("hidenModal");
  const [menu, setMenu] = useState("hiden");

  const showModalAdd = () => {
    if (clase === "hidenModal") {
      setClase("showModal-full");
    } else {
      setClase("hidenModal");
      setPhoto("");
      const URLphoto = localStorage.getItem("PhotoUrl");
      let parsePhoto = JSON.parse(URLphoto);
      setPhotoUrl(parsePhoto);
    }
  };
  function showMenu() {
    if (menu === "hiden") {
      setMenu("photo-menu--list");
    } else {
      setMenu("hiden");
    }
  }

  async function updatePhoto() {
    if (file) {
      let imageURL = await storage.uploadProfilePhoto(
        file,
        user.fields.id.stringValue
      );
      const response = await Auth.validUser();
      await Auth.updatePhoto(response, imageURL);
      await getDataUsers();
    } else {
      console.log("sin foto");
    }
  }

  return (
    <main className="mainProfile">
      <section className="mainProfile-card">
        <div className="card-photo">
          <ImageUser action={showMenu} />
          <div className="photo-menu"></div>
          <article className={menu}>
            <p className="list-item" onClick={showModalAdd}>
              * Subir Foto
            </p>
            <p className="list-item">* Quitar foto</p>
          </article>
        </div>
        <div className="card-info">
          <p className="info-item">Nombre:</p>
          <p>
            {user.fields.first.stringValue} {user.fields.last.stringValue}
          </p>
          <p className="info-item">Email:</p>
          <p>{user.fields.email.stringValue}</p>
          <p className="info-item">Cargo:</p>
          <p>{user.fields.cargo.stringValue}</p>
          <p className="info-item">Codigo:</p>
          <p>{user.fields.code.stringValue}</p>
        </div>
      </section>
      <Modal classe={clase}>
        <div className="main-modal">
          <div className="card-photo">
            <ImageUser />
          </div>
          <InputForm
            type="file"
            value={photo}
            action={setPhoto}
            File={setFile}
            currentPhoto={setPhotoUrl}
            readOnly={false}
            class="inputForm"
          />
          <div className="modalKeypad">
            <Button name="Subir" class="modalMenu" action={updatePhoto} />
            <Button name="cancelar" class="modalMenu" action={showModalAdd} />
          </div>
        </div>
      </Modal>
    </main>
  );
}

export default Profile;
