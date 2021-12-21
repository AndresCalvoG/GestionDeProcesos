import firebase from "firebase/app";
// Add the Firebase products that you want to use
import "firebase/firestore";

class Database {
  //Metodo crear una compañia en firestore database
  async createCompany(props) {
    var db = firebase.firestore();
    try {
      let docRef = await db.collection("Companies").add({ name: props });
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
  async getNameCompany(id) {
    var db = firebase.firestore();
    try {
      var docRef = await db.collection("Companies").doc(id).get();
      return docRef._delegate._document.data.value.mapValue.fields.name
        .stringValue;
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
      var docData = await db.collection("plantaJamundi").doc(props).get();
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

  //metodo para crear nuevas maquinas
  async createNewMachine(company, area, equipo, hmi, camara, data) {
    var db = firebase.firestore();
    console.log(hmi);
    try {
      if (hmi.marca !== "") {
        await db
          .collection("Companies")
          .doc(company)
          .collection("areas")
          .doc(area)
          .collection(equipo)
          .doc("Hmi")
          .set(hmi);
      }
      if (camara.marcam !== "") {
        await db
          .collection("Companies")
          .doc(company)
          .collection("areas")
          .doc(area)
          .collection(equipo)
          .doc("Camara")
          .set(camara);
      }
      await db
        .collection("Companies")
        .doc(company)
        .collection("areas")
        .doc(area)
        .collection(equipo)
        .doc("Data")
        .set(data);
      console.log("creado");
    } catch (error) {
      console.log(error);
      return error.message;
    }
  }
}

const database = new Database();
export default database;
