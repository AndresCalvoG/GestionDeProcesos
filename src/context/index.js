import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import useLocalStorage from "../customHooks/useLocalStorage";

import Auth from "../utils/autenticacion";
import database from "../utils/fireStore";

const AppContext = React.createContext();

function AppProvider(props) {
  //Constants
  const adminEmail = process.env.REACT_APP_FIREBASE_ADMIN_EMAIL;
  const adminPass = process.env.REACT_APP_FIREBASE_ADMIN_PASSWORD;
  const UserProfile =
    "https://firebasestorage.googleapis.com/v0/b/gestion-de-procesoso-tq.appspot.com/o/profilePhotos%2Fprofile.png?alt=media&token=951d5d9e-8e58-48e1-87a6-4bf6ce2de4f2";

  var User = {
    photoUrl: UserProfile,
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    area: "",
    charge: "",
    code: "",
    privilege: "",
    date: "",
    phoneNumber: "",
  };
  var Company = {
    date: { fullYear: "", fullHour: "" },
    id: "dzNfWzE9v3ceAPDBAxvp",
    businessName: "",
    phoneNumber: "",
  };
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
  const [company, saveCompany] = useLocalStorage("company", {});
  const [areas, saveAreas] = useLocalStorage("areas", []);
  const [actualMachine, saveActualMachine] = useLocalStorage(
    "actualMachine",
    {}
  );
  User = { ...User, ...user };
  //estados compartidos de context
  const [companyID, setCompanyID] = useState("");
  const [machines, setMachines] = useState([]);
  const [parts, setParts] = useState([]);
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [loading, setLoading] = useState(false);
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
      let path = data._delegate._document.data.value.mapValue.fields;
      User.photoUrl = response.photoURL;
      User.id = path.id.stringValue;
      User.firstName = capitalizeText(path.first.stringValue);
      User.lastName = capitalizeText(path.last.stringValue);
      User.email = path.email.stringValue;
      User.company = path.company.stringValue;
      User.area = capitalizeText(path.area.stringValue);
      User.charge = capitalizeText(path.charge.stringValue);
      User.code = path.code.stringValue;
      User.privilege = path.privilege.stringValue;
      User.date = path.date.stringValue;
      User.phoneNumber = response.phoneNumber;

      let dataCompany = await database.getCompany(User.company);
      let path2 = dataCompany._delegate._document.data.value.mapValue.fields;
      Company.date.fullYear = path2.date.mapValue.fields.fullYear.stringValue;
      Company.date.fullHour = path2.date.mapValue.fields.fullHour.stringValue;
      Company.id = path2.id.stringValue;
      Company.businessName = capitalizeText(path2.businessName.stringValue);
      Company.phoneNumber = path2.phoneNumber.stringValue;

      await updateAreasCompany(Company.id);
    }
    if (data.exists) {
      saveAuth(true);
      saveUser(User);
      saveCompany(Company);
      setLoading(false);
      history.replace("/home");
    } else {
      saveAuth(false);
      saveUser({ value: false });
      saveCompany({});
      saveAreas([]);
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
    var fullYear = `${yyyy}/${mm}/${dd}`;
    setFecha(fullYear);
    setHora(fullHour);
    return { fullYear, fullHour };
  }

  function capitalizeText(text) {
    let capitalText = text
      .toLowerCase()
      .trim()
      .split(" ")
      .map((v) => v[0].toUpperCase() + v.substring(1))
      .join(" ");
    return capitalText;
  }

  function getSimpleArray(arr, n = 2) {
    if (n === 2) {
      let simpleArray = arr.map((item) => {
        return {
          name: item.mapValue.fields.name.stringValue,
          value: item.mapValue.fields.value.stringValue,
        };
      });
      return simpleArray;
    } else if (n === 3) {
      let simpleArray = arr.map((item) => {
        return {
          name: item.mapValue.fields.name.stringValue,
          valueOn: item.mapValue.fields.valueOn.stringValue,
          valueOff: item.mapValue.fields.valueOff.stringValue,
        };
      });
      return simpleArray;
    }
  }

  async function updateAreasCompany(id) {
    let areasRef = await database.getDataAreas(id);
    if (areasRef.empty) {
      saveAreas([{ id: "", name: "", empty: areasRef.empty }]);
    } else {
      let areasArray = areasRef.docs.map((element) => {
        let item = {
          id: element._delegate._document.data.value.mapValue.fields.id
            .stringValue,
          name: element._delegate._document.data.value.mapValue.fields.name
            .stringValue,
        };
        return item;
      });
      saveAreas(areasArray);
    }
  }
  async function updateMachinesArea(areaID) {
    if (areaID === "") {
      setMachines([]);
    } else {
      let machinesRef = await database.getDataMachines(
        company.id || Company.id,
        areaID
      );
      if (machinesRef.empty) {
        setMachines([{ id: "empty", name: "empty", empty: machinesRef.empty }]);
        return [{ id: "empty", name: "empty", empty: machinesRef.empty }];
      } else {
        let arrayMachines = machinesRef.docs.map((element) => {
          //console.log(element);
          const path = element._delegate._document.data.value.mapValue.fields;
          let item = {
            id: path.id.stringValue,
            name: path.name.stringValue,
            cubicle: path.cubicle.stringValue,
            type: path.type.stringValue,
            imageURL: path.imageURL.stringValue,
            definition: path.definition ? path.definition.stringValue : null,
            specs: path.specs
              ? getSimpleArray(path.specs.arrayValue.values)
              : null,
            cams: path.cams
              ? getSimpleArray(path.cams.arrayValue.values, 3)
              : null,
          };
          console.log(item);
          return item;
        });
        setMachines(arrayMachines);
      }
    }
  }
  async function updatePartsMachine(areaID, machineID) {
    if (machineID === "") {
      setParts([]);
    } else {
      let partsRef = await database.getPartsMachine(
        company.id,
        areaID,
        machineID
      );
      if (partsRef.empty) {
        setParts([{ id: "empty", name: "empty", empty: partsRef.empty }]);
        return [{ id: "empty", name: "empty", empty: partsRef.empty }];
      } else {
        let arrayParts = partsRef.docs.map((element) => {
          let item = {
            id: element._delegate._document.data.value.mapValue.fields.id
              .stringValue,
            name: element._delegate._document.data.value.mapValue.fields.name
              .stringValue,
          };
          return item;
        });
        setParts(arrayParts);
      }
    }
  }

  return (
    <AppContext.Provider
      value={{
        Company,
        adminEmail,
        adminPass,
        company,
        saveCompany,
        companyID,
        setCompanyID,
        user,
        saveUser,
        User,
        auth,
        fecha,
        hora,
        loading,
        setLoading,
        newNotify,
        setNewNotify,
        update,
        setUpdate,
        areas,
        saveAreas,
        machines,
        setMachines,
        parts,
        actualMachine,
        saveActualMachine,
        handleLogout,
        getDataUsers,
        getCurrentDate,
        updateAreasCompany,
        updateMachinesArea,
        updatePartsMachine,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
