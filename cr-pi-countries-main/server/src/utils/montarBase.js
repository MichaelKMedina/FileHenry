const axios = require("axios");
const { Countrie } = require("../db");

module.exports = async () => {
    try {
      const { data } = await axios("http://localhost:5000/countries");
      const response = data.map((pais) => ({
        id: pais.cca3,
        name: pais.name.common,
        continente: pais.continents?.[0],
        capital: pais.capital?.[0],
        subregion: pais.subregion,
        bandera: pais.flags.png,
        area: pais.area,
        poblacion: pais.population,
      }));
      await Countrie.bulkCreate(response);
      console.log('Datos de la API externa guardados en la base de datos.');
    } catch (error) {
      console.log(error);
    }
};