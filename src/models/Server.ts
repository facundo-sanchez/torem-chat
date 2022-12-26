import "reflect-metadata";
import "module-alias/register";
import bodyParser from "body-parser";
import * as http from "http";
import compression from "compression";
import express, { Application } from "express";
import { connectDB } from "../db/Connection";
import Container from "typedi";
import {
  useExpressServer,
  useContainer as routingContainer,
} from "routing-controllers";

// Logger
import { Logger } from "../libs/logger";

// Controllers
import { Controllers } from "../api";


export default class Server {
  private app: Application;
  private port: number | string;
  private apiRoot: string;
  private hostName: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || 8080;
    this.apiRoot = process.env.APIROOT || "/v1";
    this.hostName = process.env.HOSTNAME || "http://localhost";

    this.dbConnection();
    this.middlewares();
  }

  async dbConnection() {
    await connectDB();
  }

  middlewares() {
    routingContainer(Container);
    useExpressServer(this.app, {
      routePrefix: this.apiRoot,
      controllers: [
        Controllers.ChatController,
        Controllers.MessageController,
        Controllers.CustomerController,
      ],
      // middlewares: [],
      defaultErrorHandler: false,
      classTransformer: false,
    });

    this.app.use(compression());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(bodyParser.json());
  }

  listen() {
    const server = http.createServer(this.app);
    server.listen(this.port, () =>
      console.log(
        `Server enabled in the host ${this.hostName} port ${this.port}`
      )
    );
    process.on("unhandledRejection", (error, promise) => {
      Logger.error("Server", "unhandledRejection:", error);
    });
  }
}
