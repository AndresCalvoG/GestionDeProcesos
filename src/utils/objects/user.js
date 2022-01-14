import person from "./person";

class user extends person {
  constructor({
    photoUrl,
    id,
    firstName,
    lastName,
    email,
    company,
    area,
    charge,
    code,
    privilege = "Invitado",
    date,
    phone,
  }) {
    super({ firstName, lastName, date, phone });
    this.photoUrl = photoUrl;
    this.id = id;
    this.email = email;
    this.company = company;
    this.area = area;
    this.charge = charge;
    this.code = code;
    this.privilege = privilege;
  }

  setPhotoUrl(urlPhoto) {
    this.photoUrl = urlPhoto;
  }
  setId(ID) {
    this.id = ID;
  }
  setEmail(email) {
    this.email = email;
  }
  setCompany(idCompany) {
    this.company = idCompany;
  }
  setArea(area) {
    this.area = area;
  }
  setCharge(charge) {
    this.charge = charge;
  }
  setCode(code) {
    this.code = code;
  }
  setPrivilege(privilege) {
    this.privilege = privilege;
  }

  getPhotoUrl() {
    return this.photoUrl;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getCompany() {
    return this.company;
  }
  getArea() {
    return this.area;
  }
  getCharge() {
    return this.charge;
  }
  getCode() {
    return this.code;
  }
  getPrivilege() {
    return this.privilege;
  }
}

export default user;
