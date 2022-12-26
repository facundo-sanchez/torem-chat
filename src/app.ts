import dotenv from "dotenv";
import Server from "./models/Server";

export default function startServer() {
  dotenv.config();
  const server = new Server();
  server.listen();
}

startServer();
