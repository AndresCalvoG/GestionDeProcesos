import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./styles/passwordReset.css";
import InputForm from "../components/InputForm";
import Button from "../components/Button";
import Auth from "../utils/autenticacion";

function PasswordReset() {
  // estados de password reset
  const [emailReset, setEmailReset] = useState("");
  const [faultReset, setFaultReset] = useState("");

  //funciones pagina de reset password
  const handleReset = async () => {
    const response = await Auth.resetPassword(emailReset);
    if (response === "auth/invalid-email") {
      setFaultReset("Correo invalido");
    } else if (response === "auth/user-not-found") {
      setFaultReset("Usuario no Registrado");
    } else {
      setFaultReset(response);
      setEmailReset("");
    }
  };

  return (
    <main className="mainReset">
      <article className="mainReset-card">
        <h1>Revisa tu correo y sigue las instrucciones</h1>
        <br />
        <br />
        <p>
          Te enviaremos un enlace a tu correo
          <br /> para que puedas cambiar la contraseña
        </p>
        <form className="mainReset-form" onSubmit={(e) => e.preventDefault()}>
          <InputForm
            type="email"
            label="Email"
            value={emailReset}
            action={setEmailReset}
            class="inputForm"
          />
          <div className="mainReset-keypad">
            <Button
              name="Cambiar Contraseña"
              class="button--long"
              action={handleReset}
            />
            <Link to="/" className="mainReset-link">
              &#11013; Regresar a inicio de sesion
            </Link>
            <Link to="/register">
              <Button name="Registrarme" class="button--long" />
            </Link>
            <br />
            <span>{faultReset}</span>
          </div>
        </form>
      </article>
    </main>
  );
}

export default PasswordReset;
