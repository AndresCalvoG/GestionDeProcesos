import React, { useState } from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/autenticacion";
import "./styles/login.css";
import { AppContext } from "../context";

import userLogo from "../images/user.svg";

import InputForm from "../components/InputForm";
import Button from "../components/Buttons/Button.js";
import Loader from "../components/Loader";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fault, setFault] = useState("");
  const [clase, setClase] = useState("hidenLoader");

  const { getDataUsers } = React.useContext(AppContext);

  //Funciones de la pagina Login
  const handleLogin = async () => {
    if (email === "" || password === "") {
      setFault("Por favor completa todos los campos");
    } else {
      setFault("");
      setClase("showLoader login");
      const response = await Auth.authEmailPass(email, password);

      if (response.code === "auth/wrong-password") {
        setFault("Contraseña Incorrecta");
        setClase("hidenLoader");
      } else if (response.code === "auth/user-not-found") {
        setFault("Usuario ó Email Incorrecto");
        setClase("hidenLoader");
      } else if (response.code === "auth/invalid-email") {
        setFault("Email Invalido");
        setClase("hidenLoader");
      } else if (response.code === "auth/network-request-failed") {
        setFault("Sin conexion a Internet");
        setClase("hidenLoader");
      } else if (response === "Por favor verifique email enviado") {
        setFault(response);
        setClase("hidenLoader");
      } else {
        await getDataUsers();
        setClase("hidenLoader");
      }
    }
  };

  return (
    <main className="mainLogin">
      <article className="mainLogin-card">
        <figure className="mainLogin-image">
          <img src={userLogo} alt="Logo Usuario" />
        </figure>
        <form className="mainLogin-form" onSubmit={(e) => e.preventDefault()}>
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
          <div className="mainLogin-board">
            <Link to="/password/reset" className="mainLogin-link">
              ¿Olvidaste tu Contraseña?
            </Link>
            <span className="fault">{fault}</span>
          </div>
          <div className="mainLogin-keypad">
            <Link to="/Register">
              <Button name="Registrarme" class="button submitb" />
            </Link>
            <Button
              name="Ingresar"
              class="button submit"
              action={handleLogin}
            />
          </div>
        </form>
        <Loader class={clase} />
      </article>
    </main>
  );
};

export default Login;
