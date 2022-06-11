import firebase from "firebase/app";
// Add the Firebase products that you want to use
import "firebase/firestore";

class Database {
  constructor() {
    this.db = firebase.firestore();
  }
  //Methods to create and modify companies
  async createCompany(props) {
    try {
      let docRef = await this.db.collection("Companies").add({
        businessName: props.businessName,
        date: props.date,
        phoneNumber: props.phone,
      });
      await this.db.collection("Companies").doc(docRef.id).set(
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
    try {
      var docRef = await this.db.collection("Companies").get();
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
    try {
      var docRef = await this.db.collection("Companies").get();
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
    try {
      var docRef = await this.db.collection("Companies").doc(id).get();
      return docRef;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  // Methods to create and modify users
  async crearUsersDb(props) {
    try {
      await this.db.collection("Users").doc(props.id).set(props);
    } catch (error) {
      console.log(error.message);
    }
  }
  async getDataUser(props) {
    try {
      var docRef = await this.db.collection("Users").doc(props).get();
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
    try {
      let areaRef = await this.db
        .collection("Companies")
        .doc(company)
        .collection("Areas")
        .add({ name: area });
      await this.db
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
  async getArea(companyId, IdArea) {
    try {
      let docData = await this.db
        .collection("Companies")
        .doc(companyId)
        .collection("Areas")
        .doc(IdArea)
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
  async getDataAreas(companyId) {
    try {
      let docData = await this.db
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
    try {
      let docRef = await this.db
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
      for (const element of Areas) {
        if (element.name === name) {
          return element;
        }
      }
      return false;
      // let area = Areas.find((element) => {
      //   if (element.name === name) {
      //     return element;
      //   }
      // });
      // if (area) {
      //   return area;
      // } else {
      //   return false;
      // }
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  async deleteArea(companyId, areaId) {
    await this.db
      .collection("Companies")
      .doc(companyId)
      .collection("Areas")
      .doc(areaId)
      .delete();
  }

  //Methods to create and modify Orders
  async createNewOrder(props) {
    try {
      await this.db
        .collection("users")
        .doc(props.id)
        .collection("orders")
        .add(props);
    } catch (error) {
      return error.message;
    }
  }
  async getOrder(props) {
    try {
      var docData = await this.db
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
    try {
      await this.db
        .collection("users")
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
    try {
      await this.db
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
    try {
      let docData = await this.db
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
    try {
      let machineRef = await this.db
        .collection("Companies")
        .doc(company)
        .collection("Areas")
        .doc(areaID)
        .collection("Machines")
        .add({ name: machine });
      await this.db
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
    try {
      var docData = await this.db
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
    try {
      if (hmi.hmi !== "") {
        let hmiRef = await this.db
          .collection("Companies")
          .doc(company)
          .collection("Areas")
          .doc(area)
          .collection("Machines")
          .doc(equipo)
          .collection("Components")
          .add(hmi);
        await this.db
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
        let camaraRef = await this.db
          .collection("Companies")
          .doc(company)
          .collection("Areas")
          .doc(area)
          .collection("Machines")
          .doc(equipo)
          .collection("Components")
          .add(camara);
        await this.db
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
      await this.db
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
    try {
      let components = await this.db
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
        await this.db
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
      await this.db
        .collection("Companies")
        .doc(companyId)
        .collection("Areas")
        .doc(AreaId)
        .collection("Machines")
        .doc(MachineId)
        .delete();
      let areaEmpty = await this.getDataMachines(companyId, AreaId);
      if (areaEmpty.empty) {
        this.deleteArea(companyId, AreaId);
      }
    } catch (error) {
      console.log(error);
    }
  }
  async validateMachineName(companyId, areaId, name) {
    try {
      var docRef = await this.db
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
      for (const element of machines) {
        if (element.name === name) {
          return element;
        }
      }
      return false;
      // let machine = machines.find((element) => {
      //   if (element.name === name) {
      //     return element;
      //   }
      // });
      // if (machine) {
      //   return machine;
      // } else {
      //   return false;
      // }
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}

const database = new Database();
export default database;
