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
    //showModalAdd();
  }

  return (
    <main className="main-container">
      <section className="profileCard">
        <ImageUser action={showModalAdd} />
        <div className="profile-info">
          <p>Nombre:</p>
          <p>
            {user.fields.first.stringValue} {user.fields.last.stringValue}
          </p>
          <p>Email:</p>
          <p>{user.fields.email.stringValue}</p>
          <p>Cargo:</p>
          <p>{user.fields.cargo.stringValue}</p>
          <p>Codigo:</p>
          <p>{user.fields.code.stringValue}</p>
        </div>
      </section>
      <Modal classe={clase}>
        <div className="main-modal">
          <h2>Nueva Foto</h2>
          <ImageUser />
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
