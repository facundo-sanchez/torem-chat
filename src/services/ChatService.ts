import { Service } from "typedi";
import { Chat } from "../classes/Chat/Chat";
import { IChat } from "../interface/IChat";
import { Logger } from "../libs/logger";
import ChatModel from "../models/Chat";
import { NotResult as NotResult } from "../types/express";

@Service()
export class ChatService {
  private ChatModel: Models.ChatModel;

  constructor() {
    this.ChatModel = ChatModel;
  }

  async getListChat(): Promise<Chat[]> {
    try {
      const chats: Array<Chat> = await this.ChatModel.find().populate(
        "Customer"
      );
      return Promise.resolve(chats);
    } catch (error) {
      Logger.error("Service: getListChat", "errorInfo:", error);
      return Promise.reject(error);
    }
  }

  async postChat(postChat: Chat): Promise<IChat> {
    try {
      const chat = new this.ChatModel(postChat);
      await chat.save();
      return Promise.resolve(chat);
    } catch (error) {
      Logger.error("Service: postChat", "errorInfo:", error);
      return Promise.reject(error);
    }
  }

  async putChat(chatId: String, putChat: Chat): Promise<Chat | NotResult> {
    try {
      const findChat = await this.ChatModel.count(chatId);
      if (findChat) {
        const response: Chat | NotResult =
          await this.ChatModel.findByIdAndUpdate(chatId, putChat);
        return Promise.resolve(response);
      }
      return Promise.reject(new Error("Chat not found"));
    } catch (error) {
      Logger.error("Service: putChat", "errorInfo:", error);
      return Promise.reject(error);
    }
  }

  async deleteChat(chatId: String): Promise<Chat | NotResult> {
    try {
      const chat: Chat | NotResult = await this.ChatModel.findByIdAndDelete(
        chatId
      );
      return Promise.resolve(chat);
    } catch (error) {
      Logger.error("Service: deleteChat", "errorInfo:", error);
      return Promise.reject(error);
    }
  }
}
