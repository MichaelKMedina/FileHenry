const { Countrie } = require("../db");

const getCountriesControl = async () => {
    const response = await Countrie.findAll();
    return response;
};

module.exports = getCountriesControl;
