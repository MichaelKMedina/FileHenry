const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");
const server = express();
const montarBaseDeDatos = require("./utils/montarBase");

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());
server.use(router);
montarBaseDeDatos();

module.exports = server;
