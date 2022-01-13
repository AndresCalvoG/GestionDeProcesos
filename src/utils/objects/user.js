import person from "./person";

class user extends person {
  constructor(
    photoUrl,
    id,
    firstName,
    lastName,
    email,
    company,
    area,
    charge,
    code,
    privilege = "Invitado"
  ) {
    super({ firstName, lastName });
    this.photoUrl = photoUrl;
    this.id = id;
    this.email = email;
    this.company = company;
    this.area = area;
    this.charge = charge;
    this.code = code;
    this.privilege = privilege;
  }
  s;
}

export default user;
