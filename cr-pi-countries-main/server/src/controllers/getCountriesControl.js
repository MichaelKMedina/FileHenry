const { Countrie, Actividad } = require("../db");

const getCountriesControl = async () => {
  const response = await Countrie.findAll({
    include: Actividad,
  });
  return response;
};

module.exports = getCountriesControl;
