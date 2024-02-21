const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");
const axios = require("axios");
const server = express();
const Country = require("./models/Country");

server.use(morgan("dev"));
server.use(express.json());
server.use(async (req, res, next) => {
  try {
    const { data } = await axios("http://localhost:5000/countries");
    console.log(data);
    const countries = data.map((pais) => ({
      nombre: pais.name,
      capital: pais.pais,
      continente: pais.continents,
      subregiom: pais.subregion,
      bandera: pais.flags.png,
      area: pais.area,
      poblacion: pais.population,
    }));
    await Country.bulkCreate(countries);
    next();
  } catch (error) {
    console.log(error);
    next(error);
  }
});

server.use(cors());
server.use(router);

module.exports = server;
