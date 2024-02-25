const { Op, Sequelize } = require("sequelize");
const { Countrie } = require("../db");

//ruta ejemplo: http://localhost:3000/countries/name?n=Colombia
const getByIdCountriesControl = async (name) => {
  name = name.n;

  if (!name) throw new Error("No se ha proporcionado un ID");
  name = name.toLowerCase();
  const pais = await Countrie.findOne({
    where: {
      name: {
        [Op.and]: [
          Sequelize.where(
            Sequelize.fn("LOWER", Sequelize.col("name")),
            "LIKE",
            `${name}%`
          ),
        ],
      },
    },
  });

  if (!pais) throw new Error("No se encontró un país con ese nombre");

  return pais;
};

module.exports = getByIdCountriesControl;
