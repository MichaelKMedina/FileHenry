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

const { Countrie, Actividad } = database.models;

// Aca vendrian las relaciones
Actividad.belongsToMany(Countrie, { through: "ActividadCountry" });
Countrie.belongsToMany(Actividad, { through: "ActividadCountry" });

module.exports = {
  Countrie,
  Actividad, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: database, // para importart la conexión { conn } = require('./db.js');
};
