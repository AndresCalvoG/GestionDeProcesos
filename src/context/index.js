import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import useLocalStorage from "../customHooks/useLocalStorage";
import users from "../utils/objects/user";
import Auth from "../utils/autenticacion";
import database from "../utils/fireStore";

const AppContext = React.createContext();

function AppProvider(props) {
  const adminEmail = "elprogramador94@gmail.com";
  const adminPass = "123456";
  const UserProfile =
    "https://firebasestorage.googleapis.com/v0/b/gestion-de-procesoso-tq.appspot.com/o/profilePhotos%2Fprofile.png?alt=media&token=b4bd3414-7c8f-4b08-bff9-9e46b113e884";
  //notificador
  const [newNotify, setNewNotify] = useState([
    {
      values: {
        fecha: { stringValue: "" },
        anomalia: { stringValue: "" },
        equipo: { stringValue: "" },
      },
      id: "",
    },
  ]);
  const [update, setUpdate] = useState(false);

  //algoritmo para local storege
  const [auth, saveAuth] = useLocalStorage("valid", false);
  const [user, saveUser] = useLocalStorage("user", { value: false });
  const [photoUrl, savePhotoUrl] = useLocalStorage("PhotoUrl", UserProfile);
  const [companyName, saveCompanyName] = useLocalStorage("companyName", " ");

  //estados compartidos de context
  const [companyID, setCompanyID] = useState("");
  const [areas, setAreas] = useState([]);
  const [equipos, setEquipos] = useState([]);
  const [partes, setPartes] = useState([]);
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const history = useHistory();

  async function getDataUsers() {
    let data = {
      value: "0",
      exists: false,
    };
    const response = await Auth.validUser();
    //console.log(response); // informacion de usuario de autenticacion
    if (response !== "/") {
      data = await database.getDataUser(response.uid);
      var User = new users(
        response.photoURL,
        data._delegate._document.data.value.mapValue.fields.id.stringValue,
        data._delegate._document.data.value.mapValue.fields.first.stringValue,
        data._delegate._document.data.value.mapValue.fields.last.stringValue,
        data._delegate._document.data.value.mapValue.fields.email.stringValue,
        data._delegate._document.data.value.mapValue.fields.company.stringValue,
        data._delegate._document.data.value.mapValue.fields.area.stringValue,
        data._delegate._document.data.value.mapValue.fields.charge.stringValue,
        data._delegate._document.data.value.mapValue.fields.code.stringValue,
        data._delegate._document.data.value.mapValue.fields.privilege.stringValue,
        data._delegate._document.data.value.mapValue.fields.date.stringValue
      );
      var nameC = await database.getNameCompany(User.company);
    }
    if (data.exists) {
      saveAuth(true);
      saveUser(User);
      savePhotoUrl(User.photoUrl);
      saveCompanyName(nameC);
      history.replace("/home");
    } else {
      saveAuth(false);
      saveUser({ value: false });
      savePhotoUrl(UserProfile);
      saveCompanyName(" ");
    }
  }

  const handleLogout = async () => {
    const route = await Auth.logoutUsers();
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
    setFecha(fullDate);
    setHora(fullHour);
  }

  async function updateFireStoreData(id) {
    let Data = await database.getData(id);
  }

  return (
    <AppContext.Provider
      value={{
        adminEmail,
        adminPass,
        companyID,
        companyName,
        user,
        auth,
        areas,
        equipos,
        partes,
        fecha,
        hora,
        newNotify,
        update,
        photoUrl,
        setCompanyID,
        setNewNotify,
        saveUser,
        setUpdate,
        savePhotoUrl,
        handleLogout,
        getDataUsers,
        getCurrentDate,
        updateFireStoreData,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
