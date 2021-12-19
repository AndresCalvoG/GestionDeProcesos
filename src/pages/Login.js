import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Auth from "../utils/autenticacion";

import "./styles/login.css";
import { AppContext } from "../context";
import InputForm from "../components/InputForm";
import Button from "../components/Button";
import Progress from "../components/progress/Progress";

const Login = () => {
  const userLogo =
    "https://firebasestorage.googleapis.com/v0/b/gestion-de-procesoso-tq.appspot.com/o/root%2Fimages%2Fuser.svg?alt=media&token=3182cc4e-caa2-498a-9929-454ce7564c10";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fault, setFault] = useState("");
  const [clase, setClase] = useState("hidenProgress");
  const history = useHistory();

  const { setLoader, getDataUsers } = React.useContext(AppContext);

  //Funciones de la pagina Login
  const handleLogin = async () => {
    if (email === "" || password === "") {
      setFault("Por favor completa todos los campos");
    } else {
      setFault("");
      setClase("showProgress");
      const response = await Auth.authEmailPass(email, password);

      if (response.code === "auth/wrong-password") {
        setFault("Contraseña Incorrecta");
        setClase("hidenProgress");
      } else if (response.code === "auth/user-not-found") {
        setFault("Usuario ó Email Incorrecto");
        setClase("hidenProgress");
      } else if (response.code === "auth/invalid-email") {
        setFault("Email Invalido");
        setClase("hidenProgress");
      } else if (response.code === "auth/network-request-failed") {
        setFault("Sin conexion a Internet");
        setClase("hidenProgress");
      } else if (response === "Por favor verifique email enviado") {
        setFault(response);
        setClase("hidenProgress");
      } else {
        setLoader(true);
        history.replace(response);
        await getDataUsers();
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
        <Progress class={clase} />
      </article>
    </main>
  );
};

export default Login;
