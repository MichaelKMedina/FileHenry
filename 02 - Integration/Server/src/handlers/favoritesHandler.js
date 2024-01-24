const favoritesControl = require("../controllers/favoritesControl");
const { postFav, deleteFav } = require("../controllers/favoritesControl")

const favoritesPostHandler = async (req, res) => {
  try {
    const character = await postFav(req, res);
    res.estatus(200).json(character);
  } catch (error) {
    res.estatus(500).json({ error: error.message });
  }
};

const favoritesDeleteHandler = async (req, res) => {
  try {
    const character = await deleteFav(req, res);
    res.estatus(200).json(character);
  } catch (error) {
    res.estatus(500).json({ error: error.message });
  }
};

module.exports = {favoritesDeleteHandler, favoritesPostHandler};