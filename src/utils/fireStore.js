import firebase from "firebase/app";
// Add the Firebase products that you want to use
import "firebase/firestore";

class Database {
  //Metodo para enviar datos obtenidos a firestore database
  async crearUsersDb(props) {
    var db = firebase.firestore();
    try {
      await db.collection("users").doc(props.id).set(props);
    } catch (error) {
      return error.message;
    }
  }

  // Metodo para obtener datos de firestore
  async getDataUser(props) {
    var db = firebase.firestore();
    try {
      var docRef = await db.collection("users").doc(props).get();
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
  async createNewPassword(area, equipo, parte, props) {
    var db = firebase.firestore();
    try {
      await db
        .collection("machines")
        .doc("JQPZdidvuOJaMeCzSK9H")
        .collection(area)
        .doc()
        .collection(equipo)
        .doc()
        .collection(parte)
        .add(props);
      console.log("creado");
    } catch (error) {
      console.log(error);
      return error.message;
    }
  }
}

const database = new Database();
export default database;