import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import "./styles/logStyles.css";
import userLogo from "../images/user.svg";
import Auth from "../utils/autenticacion";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fault, setFault] = useState("");
  const history = useHistory();

  const handleLogin = async () => {
    if (email === "" || password === "") {
      setFault("Por favor completa todos los campos");
    } else {
      setFault("");
      const response = await Auth.autEmailPass(email, password);

      if (response.code === "auth/wrong-password") {
        setFault("Contraseña Incorrecta");
      } else if (response.code === "auth/user-not-found") {
        setFault("Usuario ó Email Incorrecto");
      } else if (response.code === "auth/invalid-email") {
        setFault("Email Invalido");
      } else if (response === "Por favor verifique email enviado") {
        setFault(response);
      } else {
        history.push(response);
        props.setCheck(true);
      }
    }
  };

  return (
    <>
      <main className="main-containerLog">
        <article className="main-containerLog--card">
          <figure className="logcard-image">
            <img src={userLogo} alt="Logo Usuario" />
          </figure>
          <form className="logcard-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="logcard-form--inline">
              <Link to="/password/reset" className="logcard-form--link">
                ¿Olvidaste tu Contraseña?
              </Link>
              <span>{fault}</span>
            </div>
            <div className="logcard-button">
              <button onClick={handleLogin}>Ingresar</button>
              <Link to="/register">
                <button>Registrarme</button>
              </Link>
            </div>
          </form>
        </article>
      </main>
    </>
  );
};

export default Login;
