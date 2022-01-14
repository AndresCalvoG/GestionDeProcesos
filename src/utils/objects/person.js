class person {
  constructor({ firstName, lastName, date, phone }) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.date = new Date(date);
    this.phoneNumber = phone;
  }

  setFirstName(firstName) {
    this.firstName = firstName;
  }
  setLastName(lastName) {
    this.lastName = lastName;
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

export default person;
