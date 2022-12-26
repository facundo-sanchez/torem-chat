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
import { NotResult } from "../types/express";
import CustomerService from "../services/CustomerService";
import { ICustomer } from "../interface/ICustomer";
import { Customer } from "../classes/Customer/Customer";

@JsonController(`${URL_API.contextPath}/customers`)
@Service()
export class CustomerController {
  constructor(public customerService: CustomerService) {}

  // @UseBefore(LoggingMiddleware)
  @HttpCode(200)
  @Get("/")
  public async getCustomers(): Promise<Array<Customer>> {
    try {
      const response = await this.customerService.getCustomers();
      return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  @HttpCode(200)
  @Get("/:id")
  public async getCustomer(
    @Param("id") customerId: String
  ): Promise<Customer | NotResult> {
    try {
      const response = await this.customerService.getCustomer(customerId);
      return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  @HttpCode(201)
  @Post("/")
  public async postChat(@Body() customer: Customer): Promise<ICustomer> {
    try {
      const response: ICustomer = await this.customerService.postCustomer(
        customer
      );
      return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  @HttpCode(201)
  @Put("/:id")
  public async putChat(
    @Param("id") chatId: String,
    @Body() chat: Customer
  ): Promise<Customer | NotResult> {
    try {
      const response: Customer | NotResult =
        await this.customerService.putCustomer(chatId, chat);
      return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  @Delete("/:id")
  @OnUndefined(204)
  public async deleteChat(
    @Param("id") chatId: String
  ): Promise<Customer | NotResult> {
    try {
      const response: Customer | NotResult =
        await this.customerService.deleteCustomer(chatId);
      return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
