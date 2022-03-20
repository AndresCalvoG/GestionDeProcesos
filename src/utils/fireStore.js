import firebase from "firebase/app";
// Add the Firebase products that you want to use
import "firebase/firestore";

class Database {
  //Methods to create and modify companies
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
  async validateCompanyName(name) {
    var db = firebase.firestore();
    try {
      var docRef = await db.collection("Companies").get();
      let companies = docRef.docs.map((element) => {
        return element._delegate._document.data.value.mapValue.fields
          .businessName.stringValue;
      });
      return companies.includes(name);
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  async companyExist(id) {
    var db = firebase.firestore();
    try {
      var docRef = await db.collection("Companies").get();
      let companies = docRef.docs.map((element) => {
        return element.id;
      });
      return companies.includes(id);
    } catch (error) {
      console.log(error);
      return error;
    }
  }
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

  // Methods to create and modify users
  async crearUsersDb(props) {
    var db = firebase.firestore();
    try {
      await db.collection("Users").doc(props.id).set(props);
    } catch (error) {
      console.log(error.message);
    }
  }
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

  //Methods to create and modify areas
  async createNewArea(company, area) {
    var db = firebase.firestore();
    try {
      let areaRef = await db
        .collection("Companies")
        .doc(company)
        .collection("Areas")
        .add({ name: area });
      await db
        .collection("Companies")
        .doc(company)
        .collection("Areas")
        .doc(areaRef.id)
        .set(
          {
            id: areaRef.id,
          },
          { merge: true }
        );
      return areaRef;
    } catch (error) {
      console.log(error);
      return error.message;
    }
  }
  async getDataAreas(companyId) {
    var db = firebase.firestore();
    try {
      var docData = await db
        .collection("Companies")
        .doc(companyId)
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
  async validateAreaName(companyId, name) {
    var db = firebase.firestore();
    try {
      var docRef = await db
        .collection("Companies")
        .doc(companyId)
        .collection("Areas")
        .get();
      let Areas = docRef.docs.map((element) => {
        let item = {
          name: element._delegate._document.data.value.mapValue.fields.name
            .stringValue,
          id: element._delegate._document.data.value.mapValue.fields.id
            .stringValue,
        };
        return item;
      });
      let area = Areas.find((element) => {
        if (element.name === name) {
          return element;
        }
      });
      if (area) {
        return area;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  //Methods to create and modify Orders
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

  //Methods to create and modify passwods
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

  // methods to create and modify machines
  async createNewMachine(company, areaID, machine) {
    var db = firebase.firestore();
    try {
      let machineRef = await db
        .collection("Companies")
        .doc(company)
        .collection("Areas")
        .doc(areaID)
        .collection("Machines")
        .add({ name: machine });
      await db
        .collection("Companies")
        .doc(company)
        .collection("Areas")
        .doc(areaID)
        .collection("Machines")
        .doc(machineRef.id)
        .set(
          {
            id: machineRef.id,
          },
          { merge: true }
        );
      return machineRef;
    } catch (error) {
      console.log(error);
      return error.message;
    }
  }
  async getDataMachines(idcompany, idArea) {
    var db = firebase.firestore();
    try {
      var docData = await db
        .collection("Companies")
        .doc(idcompany)
        .collection("Areas")
        .doc(idArea)
        .collection("Machines")
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
  async addDataMachine(company, area, equipo, hmi, camara, data) {
    var db = firebase.firestore();
    try {
      if (hmi.hmi !== "") {
        let hmiRef = await db
          .collection("Companies")
          .doc(company)
          .collection("Areas")
          .doc(area)
          .collection("Machines")
          .doc(equipo)
          .collection("Components")
          .add(hmi);
        await db
          .collection("Companies")
          .doc(company)
          .collection("Areas")
          .doc(area)
          .collection("Machines")
          .doc(equipo)
          .collection("Components")
          .doc(hmiRef.id)
          .set(
            {
              id: hmiRef.id,
            },
            { merge: true }
          );
      }
      if (camara.camara !== "") {
        let camaraRef = await db
          .collection("Companies")
          .doc(company)
          .collection("Areas")
          .doc(area)
          .collection("Machines")
          .doc(equipo)
          .collection("Components")
          .add(camara);
        await db
          .collection("Companies")
          .doc(company)
          .collection("Areas")
          .doc(area)
          .collection("Machines")
          .doc(equipo)
          .collection("Components")
          .doc(camaraRef.id)
          .set(
            {
              id: camaraRef.id,
            },
            { merge: true }
          );
      }
      await db
        .collection("Companies")
        .doc(company)
        .collection("Areas")
        .doc(area)
        .collection("Machines")
        .doc(equipo)
        .set(data, { merge: true });
    } catch (error) {
      console.log(error);
      return error.message;
    }
  }
  async deleteMachine(companyId, AreaId, MachineId) {
    var db = firebase.firestore();
    try {
      let components = await db
        .collection("Companies")
        .doc(companyId)
        .collection("Areas")
        .doc(AreaId)
        .collection("Machines")
        .doc(MachineId)
        .collection("Components")
        .get();
      components.docs.map(async (element) => {
        let id =
          element._delegate._document.data.value.mapValue.fields.id.stringValue;
        await db
          .collection("Companies")
          .doc(companyId)
          .collection("Areas")
          .doc(AreaId)
          .collection("Machines")
          .doc(MachineId)
          .collection("Components")
          .doc(id)
          .delete();
      });
      await db
        .collection("Companies")
        .doc(companyId)
        .collection("Areas")
        .doc(AreaId)
        .collection("Machines")
        .doc(MachineId)
        .delete();
    } catch (error) {
      console.log(error);
    }
  }
  async validateMachineName(companyId, areaId, name) {
    var db = firebase.firestore();
    try {
      var docRef = await db
        .collection("Companies")
        .doc(companyId)
        .collection("Areas")
        .doc(areaId)
        .collection("Machines")
        .get();
      let machines = docRef.docs.map((element) => {
        let item = {
          name: element._delegate._document.data.value.mapValue.fields.name
            .stringValue,
          id: element._delegate._document.data.value.mapValue.fields.id
            .stringValue,
        };
        return item;
      });
      let machine = machines.find((element) => {
        if (element.name === name) {
          return element;
        }
      });
      if (machine) {
        return machine;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}

const database = new Database();
export default database;
