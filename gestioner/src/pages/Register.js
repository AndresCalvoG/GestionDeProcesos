import React from "react";
import InputForm from "../components/InputForm";
import { AppContext } from "../context";

import "./styles/register.css";

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
                  <InputForm
                    type="text"
                    label="Tu nombre..."
                    value={nombre}
                    action={setNombre}
                  />
                  <InputForm
                    type="text"
                    label="Tu apellido..."
                    value={apellido}
                    action={setApellido}
                  />
                  <InputForm
                    type="email"
                    label="Tu correo..."
                    value={emailReg}
                    action={setEmailReg}
                  />
                  <InputForm
                    type="password"
                    label="Contraseña..."
                    value={passwordReg}
                    action={setPasswordReg}
                  />
                  <InputForm
                    type="text"
                    label="Tu cargo..."
                    value={cargo}
                    action={setCargo}
                  />
                  <InputForm
                    type="text"
                    label="Tu codigo de empleado..."
                    value={code}
                    action={setCode}
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
