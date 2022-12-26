import { Customer } from "./Customer";

export class CustomerVip extends Customer {
  private creditCard: String;

  constructor(firsName: String, lastName: String, creditCard: String) {
    super(firsName, lastName);
    this.creditCard = creditCard;
  }

  setCreditCard(creditCard: String): void {
    this.creditCard = creditCard;
  }

  getCreditCard(): String {
    return this.creditCard;
  }
}
