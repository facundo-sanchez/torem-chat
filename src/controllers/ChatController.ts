import { Service } from "typedi";
import {
  JsonController,
  Get,
  Delete,
  Put,
  Post,
  QueryParam,
  Body,
  HttpCode,
  HttpError,
  OnNull,
  OnUndefined,
  Param,
  UseBefore,
  // Controller
} from "routing-controllers";
import { URL_API } from "../config/config";
import { ChatService } from "../services/ChatService";
import { IChat } from "../interface/IChat";
import { NotResult } from "../types/express";
import { Chat } from "../classes/Chat/Chat";

@JsonController(`${URL_API.contextPath}/chats`)
@Service()
export class ChatController {
  constructor(public chatsService: ChatService) {}

  @HttpCode(200)
  @Get("/")
  public async getChats(): Promise<Array<Chat>> {
    try {
      const response = await this.chatsService.getListChat();
      return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  @HttpCode(201)
  @Post("/")
  public async postChat(@Body() chat: Chat): Promise<IChat> {
    try {
      const response: IChat = await this.chatsService.postChat(chat);
      return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  @HttpCode(201)
  @Put("/:id")
  public async putChat(
    @Param("id") chatId: String,
    @Body() chat: Chat
  ): Promise<Chat | NotResult> {
    try {
      const response: Chat | NotResult = await this.chatsService.putChat(
        chatId,
        chat
      );
      return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  @Delete("/:id")
  @OnUndefined(204)
  public async deleteChat(
    @Param("id") chatId: String
  ): Promise<Chat | NotResult> {
    try {
      const response: Chat | NotResult = await this.chatsService.deleteChat(
        chatId
      );
      return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
