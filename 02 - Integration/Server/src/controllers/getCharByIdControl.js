const axios = require("axios");

const getCharByIdControl = async (id) => {
    const URL = `https://rickandmortyapi.com/api/character/${id}`;
    const { data } = await axios(URL);
    if (!data.id) throw error = ("No existe ID");
      const { name, gender, species, origin, image, status } = data;
      const character = { id, name, gender, species, origin, image, status };
      return(character);
};

module.exports = getCharByIdControl;
