import React from "react";
import { AppContext } from "../context";

import "./styles/regStyles.css";

const Register = () => {
  return (
    <>
      <AppContext.Consumer>
        {({
          contain,
          nombre,
          apellido,
          emailReg,
          passwordReg,
          cargo,
          code,
          faultReg,
          nombres,
          setNombre,
          setApellido,
          setEmailReg,
          setPasswordReg,
          setCargo,
          setCode,
          handleRegister,
        }) =>
          !contain ? (
            <main className="mainRegister">
              <section className="form_register">
                <h1>Registro</h1>
                <form onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="text"
                    placeholder="Tu nombre..."
                    autoComplete="name"
                    required
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Tu apellido..."
                    autoComplete="apellido"
                    required
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                  />
                  <input
                    type="email"
                    placeholder="Tu correo..."
                    autoComplete="email"
                    required
                    value={emailReg}
                    onChange={(e) => setEmailReg(e.target.value)}
                  />
                  <input
                    type="password"
                    placeholder="Contraseña..."
                    required
                    value={passwordReg}
                    onChange={(e) => setPasswordReg(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Cargo..."
                    autoComplete="cargo"
                    required
                    value={cargo}
                    onChange={(e) => setCargo(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Codigo de empleado..."
                    autoComplete="code"
                    required
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                  />
                  <span>{faultReg}</span>
                  <button className="send" onClick={handleRegister}>
                    Registrarme
                  </button>
                </form>
              </section>
            </main>
          ) : (
            <main className="main-success">
              <h1> Bienvenido </h1>
              <br />
              <br />
              <p className="names">
                {nombres
                  .toLowerCase()
                  .trim()
                  .split(" ")
                  .map((v) => v[0].toUpperCase() + v.substr(1))
                  .join(" ")}
              </p>
              <p>
                {" "}
                Debes realizar el proceso de verificacion desde el correo
                enviado a tu email{" "}
              </p>
            </main>
          )
        }
      </AppContext.Consumer>
    </>
  );
};

export default Register;
