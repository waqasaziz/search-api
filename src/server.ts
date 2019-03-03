import http from "http";
import express from "express";
import { applyMiddleware, applyRoutes } from "./utils";
import middleware from "./middleware";
import { initDB } from "./middleware/database";
import errorHandlers from "./middleware/errorHandlers";
import routes from "./services";
process.on("uncaughtException", (e: any) => {
  console.log(e);
  process.exit(1);
});

process.on("unhandledRejection", (e: any) => {
  console.log(e);
  process.exit(1);
});

initDB();

const router = express();

applyMiddleware(middleware, router);

applyRoutes(routes, router);

applyMiddleware(errorHandlers, router);

const { PORT = 3000 } = process.env;

const server = http.createServer(router);

server.listen(PORT, () => console.log(`Server is running on ${PORT}`));
