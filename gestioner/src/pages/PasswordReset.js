import React from "react";
import { Link } from "react-router-dom";

import "./styles/passwordReset.css";
import InputForm from "../components/InputForm";
import { AppContext } from "../context";

function PasswordReset() {
  return (
    <>
      <AppContext.Consumer>
        {({ emailReset, setEmailReset, faultReset, handleReset }) => (
          <main className="mainReset">
            <article className="mainReset-card">
              <h1>Revisa tu correo y sigue las instrucciones</h1>
              <br />
              <br />
              <p>
                Te enviaremos un enlace a tu correo
                <br /> para que puedas cambiar la contraseña
              </p>
              <form
                className="mainReset-form"
                onSubmit={(e) => e.preventDefault()}
              >
                <InputForm
                  type="email"
                  label="Email"
                  value={emailReset}
                  action={setEmailReset}
                />
                <div className="mainReset-keypad">
                  <button onClick={handleReset}>Cambiar Contraseña</button>
                  <Link to="/" className="mainReset-link">
                    &#11013; Regresar a inicio de sesion
                  </Link>
                  <Link to="/register">
                    <button>Registrarme</button>
                  </Link>
                  <br />
                  <span>{faultReset}</span>
                </div>
              </form>
            </article>
          </main>
        )}
      </AppContext.Consumer>
    </>
  );
}

export default PasswordReset;
