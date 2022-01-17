import firebase from "firebase/app";
// Add the Firebase products that you want to use
import "firebase/firestore";

class Database {
  //Metodo crear una compañia en firestore database
  async createCompany(props) {
    var db = firebase.firestore();
    try {
      let docRef = await db.collection("Companies").add({
        businessName: props.businessName,
        date: props.date,
        phoneNumber: props.phone,
      });
      await db.collection("Companies").doc(docRef.id).set(
        {
          id: docRef.id,
        },
        { merge: true }
      );
      return docRef.id;
    } catch (error) {
      console.log(error.message);
    }
  }
  // Metodo para verificar compañia
  async companyExist(id) {
    var db = firebase.firestore();
    try {
      var docRef = await db.collection("Companies").get();
      let companies = docRef.docs.map((element) => {
        return element.id;
      });
      for (let i of companies) {
        if (i === id) {
          return true;
        }
      }
      return false;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  //metodo para obtener nombre de compañia
  async getCompany(id) {
    var db = firebase.firestore();
    try {
      var docRef = await db.collection("Companies").doc(id).get();
      return docRef;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  //Metodo para enviar datos obtenidos a firestore database
  async crearUsersDb(props) {
    var db = firebase.firestore();
    try {
      await db
        .collection("Companies")
        .doc(props.company)
        .collection("Users")
        .doc(props.id)
        .set(props);
      await db.collection("Users").doc(props.id).set(props);
    } catch (error) {
      console.log(error.message);
    }
  }

  // Metodo para obtener datos de firestore
  async getDataUser(props) {
    var db = firebase.firestore();
    try {
      var docRef = await db.collection("Users").doc(props).get();
      return docRef;
    } catch (error) {
      console.log(error);
      return {
        value: "0",
        exists: false,
      };
    }
  }
  //Metodo para obtener data de base de datos
  async getData(props) {
    var db = firebase.firestore();
    try {
      var docData = await db
        .collection("Companies")
        .doc(props)
        .collection("Areas")
        .get();
      return docData;
    } catch (error) {
      console.log(error);
      return {
        value: "0",
        exists: false,
      };
    }
  }
  //Metodo para enviar datos obtenidos a firestore database
  async createNewOrder(props) {
    var db = firebase.firestore();
    try {
      await db
        .collection("users")
        .doc(props.id)
        .collection("orders")
        .add(props);
    } catch (error) {
      return error.message;
    }
  }
  //Metodo para obtener ordenes
  async getOrder(props) {
    var db = firebase.firestore();
    try {
      var docData = await db
        .collection("users")
        .doc(props)
        .collection("orders")
        .get();
      return docData;
    } catch (error) {
      console.log(error);
      return {
        value: "0",
        exists: false,
      };
    }
  }
  //Metodo para borrar ordenes
  async deleteOrder(props) {
    var db = firebase.firestore();
    try {
      db.collection("users")
        .doc(props.userID)
        .collection("orders")
        .doc(props.orderID)
        .delete();
    } catch (error) {
      console.log(error);
    }
  }

  //metodo para crear nuevas contraseñas
  async createNewPassword(area, equipo, parte, user, props) {
    var db = firebase.firestore();
    try {
      await db
        .collection("areas")
        .doc(area)
        .collection(equipo)
        .doc(parte)
        .collection("usuarios")
        .doc(user)
        .set(props);
      console.log("creado");
    } catch (error) {
      console.log(error);
      return error.message;
    }
  }

  //metodo para traer contraseñas
  async getPasswords(area, machine, parte) {
    var db = firebase.firestore();
    try {
      var docData = await db
        .collection("areas")
        .doc(area)
        .collection(machine)
        .doc(parte)
        .collection("usuarios")
        .get();
      return docData;
    } catch (error) {
      console.log(error);
      return {
        value: "0",
        exists: false,
      };
    }
  }

  //metodo para crear nuevas area
  async createNewArea(company, area) {
    var db = firebase.firestore();
    try {
      let areaRef = await db
        .collection("Companies")
        .doc(company)
        .collection("Areas")
        .add({ name: area });
      return areaRef;
    } catch (error) {
      console.log(error);
      return error.message;
    }
  }

  async createNewMachine(company, areaID, machine) {
    var db = firebase.firestore();
    try {
      let machineRef = await db
        .collection("Companies")
        .doc(company)
        .collection("Areas")
        .doc(areaID)
        .collection("Equipos")
        .add({ name: machine });
      return machineRef;
    } catch (error) {
      console.log(error);
      return error.message;
    }
  }

  async addDataMachine(company, area, equipo, hmi, camara, data) {
    var db = firebase.firestore();
    try {
      if (hmi.hmi !== "") {
        await db
          .collection("Companies")
          .doc(company)
          .collection("Areas")
          .doc(area)
          .collection("Equipos")
          .doc(equipo)
          .collection("Components")
          .add(hmi);
      }
      if (camara.camara !== "") {
        await db
          .collection("Companies")
          .doc(company)
          .collection("Areas")
          .doc(area)
          .collection("Equipos")
          .doc(equipo)
          .collection("Components")
          .add(camara);
      }
      await db
        .collection("Companies")
        .doc(company)
        .collection("Areas")
        .doc(area)
        .collection("Equipos")
        .doc(equipo)
        .set(data, { merge: true });
    } catch (error) {
      console.log(error);
      return error.message;
    }
  }
}

const database = new Database();
export default database;
