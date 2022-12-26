import { Customer } from "../Customer/Customer";

export class Chat {
  private isFavourite: Boolean | null;
  private Customer: Customer | null;

  constructor(Customer: Customer) {
    this.isFavourite = false;
    this.Customer = Customer;
  }

  toString(): String {
    return `isFavourite: ${this.isFavourite} Customer:${this.Customer}`;
  }
}
