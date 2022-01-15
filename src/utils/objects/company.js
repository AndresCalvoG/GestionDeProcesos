class company {
  constructor({ razonSocial, id }) {
    this.razonSocial = razonSocial;
    this.id = id;
    this.date = new Date(date);
    this.phoneNumber = phone;
  }

  setRazonSocial(razonSocial) {
    this.razonSocial = razonSocial;
  }
  setId(id) {
    this.id = id;
  }
  setDate(date) {
    this.date = new Date(date);
  }
  setPhoneNumber(phone) {
    this.phoneNumber = phone;
  }
  getAge() {
    let currentDate = new Date();
    let Age = currentDate.getFullYear() - this.date.getFullYear();
    return Age;
  }
}

export default company;
