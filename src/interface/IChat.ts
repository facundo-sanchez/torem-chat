import { ICustomer } from "./ICustomer";
import { IMessage } from "./IMessage";

export interface IChat {
  isFavourite: Boolean;
  customer: ICustomer;
}
