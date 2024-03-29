import React, { useState } from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/autenticacion";
import "./login.css";
import { AppContext } from "../../context";

import userLogo from "./images/user.svg";

import InputForm from "../../components/InputForm";
import Button from "../../components/Buttons/Button.js";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fault, setFault] = useState("");

  const { getDataUsers, setLoading } = React.useContext(AppContext);

  //Funciones de la pagina Login
  async function handleLogin() {
    if (email === "" || password === "") {
      setFault("Por favor completa todos los campos");
    } else {
      setFault("");
      setLoading(true);
      const response = await Auth.authEmailPass(email, password);

      if (response.code === "auth/wrong-password") {
        setFault("Contraseña Incorrecta");
        setLoading(false);
      } else if (response.code === "auth/user-not-found") {
        setFault("Usuario ó Email Incorrecto");
        setLoading(false);
      } else if (response.code === "auth/invalid-email") {
        setFault("Email Invalido");
        setLoading(false);
      } else if (response.code === "auth/network-request-failed") {
        setFault("Sin conexion a Internet");
        setLoading(false);
      } else if (response === "Por favor verifique email enviado") {
        setFault(response);
        setLoading(false);
      } else {
        await getDataUsers();
        setLoading(false);
      }
    }
  }

  return (
    <main className="Login-main">
      <section className="Login-card">
        <figure className="Login-image">
          <img src={userLogo} alt="Logo Usuario" />
        </figure>
        <form className="Login-form" onSubmit={(e) => e.preventDefault()}>
          <InputForm
            type="email"
            label="Email"
            value={email}
            action={setEmail}
            class="inputForm"
          />
          <InputForm
            type="password"
            label="Password"
            value={password}
            action={setPassword}
            class="inputForm"
          />
          <div className="Login-board">
            <Link to="/password/reset" className="Login-link">
              ¿Olvidaste tu Contraseña?
            </Link>
            <span className="fault">{fault}</span>
          </div>
          <div className="Login-keypad">
            <Link to="/Register">
              <Button name="Registrarme" type="basic" />
            </Link>
            <Button
              name="Ingresar"
              type="basic"
              invertColor={true}
              action={handleLogin}
            />
          </div>
        </form>
      </section>
    </main>
  );
}

export default Login;
