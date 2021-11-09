import React, { useState, useEffect } from "react";
import ImageUser from "../components/ImageUser";
import Modal from "../components/Modal";
import Button from "../components/Button";
import InputForm from "../components/InputForm";
import { AppContext } from "../context";
import "./styles/profile.css";

function Profile() {
  const { photoUrl, setPhotoUrl, user } = React.useContext(AppContext);
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    var menu = document.getElementById("modalMenu");
    menu.classList.replace("modalBackground", "hidenModal");
  }, []);

  function changeImageUser() {
    setPhoto("");
    var menu = document.getElementById("modalProfile");
    if (menu.classList.contains("hidenModal")) {
      menu.classList.replace("hidenModal", "modalBackground-delete");
    } else {
      menu.classList.replace("modalBackground-delete", "hidenModal");
    }
  }

  return (
    <main className="main-container">
      <section className="profileCard">
        <ImageUser action={changeImageUser} />
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
      <Modal id="modalProfile">
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
            <Button name="Subir" class="modalMenu" />
            <Button
              name="cancelar"
              class="modalMenu"
              action={changeImageUser}
            />
          </div>
        </div>
      </Modal>
    </main>
  );
}

export default Profile;
