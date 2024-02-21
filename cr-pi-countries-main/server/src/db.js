require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const CountryModel = require("./models/Country");
const ActividadModel = require("./models/Actividad");

const database = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/countries`,
  {
    logging: false,
    native: false,
  }
);

CountryModel(database);
ActividadModel(database);

const { Country, Actividad } = database.models;

// Aca vendrian las relaciones
Country.belongsToMany(Actividad, { through: "ActividadCountry" });
Actividad.belongsToMany(Country, { through: "ActividadCountry" });

module.exports = {
  Country,
  Actividad, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: database, // para importart la conexión { conn } = require('./db.js');
};
