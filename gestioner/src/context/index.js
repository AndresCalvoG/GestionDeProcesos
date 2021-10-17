import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Auth from "../utils/autenticacion";
import database from "../utils/fireStore";

const AppContext = React.createContext();

function AppProvider(props) {
  const authenticated = localStorage.getItem("valid");
  const userActive = localStorage.getItem("user");
  let parseAuth = JSON.parse(authenticated);
  let parseUser = JSON.parse(userActive);

  if (!authenticated) {
    localStorage.setItem("valid", JSON.stringify(false));
    parseAuth = false;
  } else {
    parseAuth = JSON.parse(authenticated);
  }
  if (!userActive) {
    localStorage.setItem("user", JSON.stringify({ value: false }));
    parseUser = { value: false };
  } else {
    parseUser = JSON.parse(userActive);
  }

  const [auth, setAuth] = useState(parseAuth);
  const [user, setUser] = useState(parseUser);
  const [loader, setLoader] = useState(false);

  const history = useHistory();

  const getDataUsers = async () => {
    let data = {
      value: "0",
      exists: false,
    };
    const response = await Auth.validUser();
    if (response !== "/GestionDeProcesos") {
      data = await database.getDataUser(response.uid);
    }
    if (data.exists) {
      handleValid(true, data._delegate._document.data.value.mapValue, true);
      setLoader(false);
      history.push("/home");
      console.log("reder true en app");
    } else {
      handleValid(false, { value: false }, false);
      setLoader(false);
      console.log("render false en app");
    }
  };
  const handleValid = (token, user, mode) => {
    localStorage.setItem("valid", JSON.stringify(token));
    localStorage.setItem("user", JSON.stringify(user));
    if (mode) {
      setUser(user);
      setAuth(token);
    } else {
      setAuth(token);
      setUser(user);
    }
  };
  const handleLogout = async () => {
    const route = await Auth.logoutUsers();
    setLoader(true);
    history.push("/Loader");
    getDataUsers();
    history.push(route);
  };

  function getCurrentDate() {
    let date = new Date();
    var dd = date.getDate();
    var mm = date.getMonth() + 1; //January is 0!
    var yyyy = date.getFullYear();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    var fullHour = `${hour}:${min}:${sec}`;
    var fullDate = `${dd}/${mm}/${yyyy}`;

    return { fullDate, fullHour };
  }

  return (
    <AppContext.Provider
      value={{
        user,
        auth,
        loader,
        setUser,
        setAuth,
        setLoader,
        handleLogout,
        getDataUsers,
        getCurrentDate,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
