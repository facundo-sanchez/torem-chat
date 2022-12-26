export abstract class Customer {
  protected firstName: String;
  protected lastName: String;

  constructor(firsName: String, lastName: String) {
    this.firstName = firsName;
    this.lastName = lastName;
  }

  setFirstName(firsName: String): void {
    this.firstName = firsName;
  }
  setLastName(lastName: String): void {
    this.lastName = lastName;
  }

  getFirstName(): String {
    return this.firstName;
  }

  getLastName(): String {
    return this.lastName;
  }

  toString(): String{
    return `FirstName:${this.firstName}, SecondName: ${this.lastName} `
  }
}
