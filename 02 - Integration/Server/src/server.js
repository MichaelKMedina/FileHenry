const express = require("express");
const server = express();
const router = require("./Routes/index");

server.use(express.json());
server.use("/rickandmorty", router)

module.exports = server; 