import { Service } from "typedi";
import { IMessage } from "../interface/IMessage";
import { Message } from "../classes/Messages/Message";
import MessageModel from "../models/Message";
import { Logger } from "../libs/logger";
import { NotResult } from "../types/express";

@Service()
export default class MessageService {
  private MessageModel: Models.MessageModel;

  constructor() {
    this.MessageModel = MessageModel;
  }

  async getMessages(chatId: String): Promise<Array<Message | NotResult>> {
    try {
      const messages: Array<Message> | NotResult = await this.MessageModel.find(
        { chat: chatId }
      );
      return Promise.resolve(messages);
    } catch (error) {
      Logger.error("Service: getMessages", "errorInfo:", error);
      return Promise.reject(error);
    }
  }

  async postMessages(message: Message): Promise<IMessage> {
    try {
      const messages: IMessage = await this.MessageModel.create(message);
      return Promise.resolve(messages);
    } catch (error) {
      Logger.error("Service: postMessages", "errorInfo:", error);
      return Promise.reject(error);
    }
  }
}
