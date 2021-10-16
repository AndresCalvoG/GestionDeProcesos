import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Auth from "../utils/autenticacion";
import database from "../utils/fireStore";

const AppContext = React.createContext();

function AppProvider(props) {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState({});
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
      setUser(data._delegate._document.data.value.mapValue);
      setAuth(true);
      setLoader(false);
      history.push("/home");
      console.log("reder true en app");
    } else {
      setAuth(false);
      setUser({ value: false });
      console.log("render false en app");
    }
  };

  const handleLogout = async () => {
    const route = await Auth.logoutUsers();
    history.push(route);
    getDataUsers();
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
