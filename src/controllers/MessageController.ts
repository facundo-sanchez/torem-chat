import { Service } from "typedi";
import {
  JsonController,
  Get,
  Delete,
  Put,
  Post,
  Body,
  Param,
  HttpCode,
} from "routing-controllers";
import { URL_API } from "../config/config";
import MessageService from "../services/MessageService";
import { IMessage } from "../interface/IMessage";
import { Message } from "../classes/Messages/Message";
import { NotResult } from "../types/express";

@JsonController(`${URL_API.contextPath}/messages`)
@Service()
export class MessageController {
  constructor(public messageService: MessageService) {}

  @HttpCode(200)
  @Get("/:chatId")
  public async getMessages(
    @Param("chatId") chatId: String
  ): Promise<Array<Message | NotResult>> {
    try {
      const response = await this.messageService.getMessages(chatId);
      return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  @HttpCode(201)
  @Post("/")
  public async postMessage(@Body() message: Message): Promise<IMessage> {
    try {
      const response = await this.messageService.postMessages(message);
      return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
