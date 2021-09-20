import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import Auth from "../utils/autenticacion";

const AppContext = React.createContext()

function AppProvider(props){
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState({});
  const [check, setCheck] = useState(false);
	const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fault, setFault] = useState("");
	const history = useHistory();
	
  useEffect(() => {
    (async function () {
      let data = {
        value: "0",
        exists: false,
      };
      const response = await Auth.validUser();
      if (response !== "/") {
        data = await Auth.getDataUser(response.uid);
      }
      if (data.exists) {
        setUser(data._delegate._document.data.value.mapValue);
        setAuth(true);
        console.log("reder true en app");
      } else {
        setAuth(false);
        setUser({ value: false });
        console.log("render false en app");
      }
    })();
  }, [check]);

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

    return(
        <AppContext.Provider value = {{
					user,
					auth,
					check,
					email,
					password,
					fault,
					setUser,
					setAuth,
					setCheck,
					setEmail,
					setPassword,
					setFault,
					handleLogin
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export {AppContext, AppProvider}