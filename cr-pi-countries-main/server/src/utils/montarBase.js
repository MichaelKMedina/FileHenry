const axios = require("axios");
const {Country} = require("../db");

module.exports = async () => {
    try {
      const { data } = await axios("http://localhost:5000/countries"); 
      const response = data.map((pais) => ({
        name: pais.name.common,
        continente: pais.continents,
        capital: pais.capital,
        subregion: pais.subregion,
        bandera: pais.flags.png,
        area: pais.area,
        poblacion: pais.population,
      }));
      await Country.bulkCreate(response);
    } catch (error) {
      console.log(error);
    }
  };