import { Customer } from "./Customer";

export class CustomerRegular extends Customer {
  private phoneNumber: String;

  constructor(firsName: String, lastName: String, phoneNumber: String) {
    super(firsName, lastName);
    this.phoneNumber = phoneNumber;
  }

  setPhoneNumber(phoneNumber: String): void {
    this.phoneNumber = phoneNumber;
  }

  getPhoneNumber(): String {
    return this.phoneNumber;
  }
}
