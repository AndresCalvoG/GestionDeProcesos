import React, { useState } from "react";
import ImageUser from "../components/ImageUser";
import Modal from "../components/Modal";
import Button from "../components/Button";
import InputForm from "../components/InputForm";
import { AppContext } from "../context";
import "./styles/profile.css";

function Profile() {
  const { photoUrl, setPhotoUrl } = React.useContext(AppContext);
  const [photo, setPhoto] = useState("");

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
