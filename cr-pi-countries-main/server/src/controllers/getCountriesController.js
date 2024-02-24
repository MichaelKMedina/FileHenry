const { Countrie } = require("../db");

const getCountriesController = async (req, res) => {
  try {
    const response = await Countrie.findAll();
    return response;
  } catch (error) {
    console.error('Error al obtener países:', error);
  }
};

module.exports = getCountriesController;
