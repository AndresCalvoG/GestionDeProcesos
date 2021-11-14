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
  const { user, superUser, getDataUser } = React.useContext(AppContext);
  const [photo, setPhoto] = useState("");
  const [clase, setClase] = useState("hidenModal");

  const showModalAdd = () => {
    if (clase === "hidenModal") {
      setClase("showModal-full");
    } else {
      setClase("hidenModal");
      setPhoto("");
    }
  };

  async function updatePhoto() {
    storage.uploadProfilePhoto(photo);
    if (!photo) {
      await Auth.updatePhoto(superUser, photo);
      await getDataUser();
    } else {
      console.log("sin foto");
    }
    showModalAdd();
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
