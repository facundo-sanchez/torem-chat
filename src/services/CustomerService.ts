import { Param } from "routing-controllers";
import { Service } from "typedi";
import { Customer } from "../classes/Customer/Customer";
import { ICustomer } from "../interface/ICustomer";
import { Logger } from "../libs/logger";
import CustomerModel from "../models/Customer";
import { NotResult as NotResult } from "../types/express";

@Service()
export default class CustomerService {
  private CustomerModel: Models.CustomerModel;

  constructor() {
    this.CustomerModel = CustomerModel;
  }

  async getCustomers(): Promise<Array<Customer>> {
    try {
      const customers: Array<Customer> = await this.CustomerModel.find();
      return Promise.resolve(customers);
    } catch (error) {
      Logger.error("Service: getCustomers", "errorInfo:", error);
      return Promise.reject(error);
    }
  }

  async getCustomer(customerId: String): Promise<Customer | NotResult> {
    try {
      const customer: Customer | NotResult = await this.CustomerModel.findById(
        customerId
      );
      return Promise.resolve(customer);
    } catch (error) {
      Logger.error("Service: getCustomer", "errorInfo:", error);
      return Promise.reject(error);
    }
  }

  async postCustomer(customer: Customer): Promise<ICustomer> {
    try {
      const customerNew = new this.CustomerModel(customer);
      await customerNew.save();
      return Promise.resolve(customerNew);
    } catch (error) {
      Logger.error("Service: postCustomer", "errorInfo:", error);
      return Promise.reject(error);
    }
  }

  async putCustomer(
    customerId: String,
    customer: Customer
  ): Promise<Customer | NotResult> {
    try {
      const findCustomer = await this.CustomerModel.count(customerId);
      if (findCustomer) {
        const response: Customer | NotResult =
          await this.CustomerModel.findByIdAndUpdate(customerId, customer);
        return Promise.resolve(response);
      }
      return Promise.reject(new Error("Customer not found"));
    } catch (error) {
      Logger.error("Service: putCustomer", "errorInfo:", error);
      return Promise.reject(error);
    }
  }

  async deleteCustomer(customerId: String): Promise<Customer | NotResult> {
    try {
      const customer: Customer | NotResult =
        await this.CustomerModel.findByIdAndDelete(customerId);
      return Promise.resolve(customer);
    } catch (error) {
      Logger.error("Service: deleteCustomer", "errorInfo:", error);
      return Promise.reject(error);
    }
  }
}
