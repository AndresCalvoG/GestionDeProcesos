import React from "react";
import { Link } from "react-router-dom";

import "./styles/login.css";
import userLogo from "../images/login/user.svg";
import { AppContext } from "../context";
import InputForm from "../components/InputForm";

const Login = () => {
  const { email, setEmail, password, setPassword, fault, handleLogin } =
    React.useContext(AppContext);

  return (
    <>
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
            />
            <InputForm
              type="password"
              label="Password"
              value={password}
              action={setPassword}
            />
            <div className="mainLogin-board">
              <Link to="/password/reset" className="mainLogin-link">
                ¿Olvidaste tu Contraseña?
              </Link>
              <span>{fault}</span>
            </div>
            <div className="mainLogin-keypad">
              <button onClick={handleLogin}>Ingresar</button>
              <Link to="/Register">
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
