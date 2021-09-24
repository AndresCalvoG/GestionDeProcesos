import React from "react";
import { Link } from "react-router-dom";

import "./styles/logStyles.css";
import userLogo from "../images/user.svg";
import { AppContext } from "../context";

const Login = () => {
  return (
    <>
      <AppContext.Consumer>
        {({ email, setEmail, password, setPassword, fault, handleLogin }) => (
          <main className="mainLogin">
            <article className="mainLogin-card">
              <figure className="mainLogin-image">
                <img src={userLogo} alt="Logo Usuario" />
              </figure>
              <form
                className="mainLogin-form"
                onSubmit={(e) => e.preventDefault()}
              >
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
                <div className="mainLogin-board">
                  <Link to="/password/reset" className="mainLogin-link">
                    ¿Olvidaste tu Contraseña?
                  </Link>
                  <span>{fault}</span>
                </div>
                <div className="mainLogin-keypad">
                  <button onClick={handleLogin}>Ingresar</button>
                  <Link to="/register">
                    <button>Registrarme</button>
                  </Link>
                </div>
              </form>
            </article>
          </main>
        )}
      </AppContext.Consumer>
    </>
  );
};

export default Login;
