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
  const { user, getDataUsers, savePhotoUrl, User } =
    React.useContext(AppContext);
  const [photo, setPhoto] = useState("");
  const [file, setFile] = useState("");
  const [clase, setClase] = useState("hidenModal");
  const [menu, setMenu] = useState("hiden");
  const [items, setItems] = useState("hiden");

  const showModalAdd = () => {
    if (clase === "hidenModal") {
      setClase("showModal-full");
      showMenu();
      console.log(User);
    } else {
      setClase("hidenModal");
      setPhoto("");
      savePhotoUrl(user.photoUrl);
    }
  };
  function showMenu() {
    if (menu === "hiden") {
      setMenu("photo-menu--list");
    } else {
      setMenu("hiden");
    }
    if (items === "hiden") {
      setItems("photo-menu--items");
    } else {
      setItems("hiden");
    }
  }

  async function updatePhoto() {
    if (file) {
      let imageURL = await storage.uploadProfilePhoto(
        user.company,
        file,
        user.id
      );
      const response = await Auth.validUser();
      await Auth.updatePhoto(response, imageURL);
      await getDataUsers();
    } else {
      console.log("sin foto");
    }
  }

  async function deletePhoto() {
    let defaultImage = await storage.deleteProfilePhoto(user.company, user.id);
    const response = await Auth.validUser();
    await Auth.updatePhoto(response, defaultImage);
    await getDataUsers();
    console.log("eliminado");
  }

  return (
    <main className="mainProfile">
      <section className="mainProfile-card">
        <div className="card-photo">
          <ImageUser action={showMenu} />
          <div className="photo-menu"></div>
          <article className={menu}></article>
          <article className={items}>
            <p className="list-item" onClick={showModalAdd}>
              * Subir Foto
            </p>
            <p className="list-item" onClick={deletePhoto}>
              * Quitar foto
            </p>
          </article>
        </div>
        <div className="card-info">
          <p className="info-item">Nombre:</p>
          <p>
            {user.firstName} {user.lastName}
          </p>
          <p className="info-item">Email:</p>
          <p>{user.email}</p>
          <p className="info-item">Cargo:</p>
          <p>{user.charge}</p>
          <p className="info-item">Codigo:</p>
          <p>{user.code}</p>
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
            currentPhoto={savePhotoUrl}
            readOnly={false}
            class="inputForm"
          />
          <div className="modalKeypad">
            <Button
              name="cancelar"
              class="button submitb"
              action={showModalAdd}
            />
            <Button name="Subir" class="button submit" action={updatePhoto} />
          </div>
        </div>
      </Modal>
    </main>
  );
}

export default Profile;
