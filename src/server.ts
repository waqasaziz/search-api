import http from "http";
import express from "express";
import middleware from "./middleware";
import routes from "./services";
import { applyMiddleware, applyRoutes } from "./utils";

const router = express();

applyMiddleware(middleware, router);

applyRoutes(routes, router);

const { PORT = 3000 } = process.env;

const server = http.createServer(router);

server.listen(PORT, () => console.log(`Server is running on ${PORT}`));
