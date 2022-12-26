import { Document, Model } from "mongoose";
import { IChat } from "../../interface/IChat";
import { ICustomer } from "../../interface/ICustomer";
import { IMessage } from "../../interface/IMessage";
declare global {
  namespace Express {
    export interface Request {
      currentChat: IChat & Document;
      currentMessage: IMessage & Document;
      currentCustomer: ICustomer & Document;
    }
  }

  namespace Models {
    export type ChatModel = Model<IChat & Document>;
    export type MessageModel = Model<IMessage & Document>;
    export type CustomerModel = Model<ICustomer & Document>;
  }
}

export type NotResult = null | undefined;
