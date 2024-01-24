let myFavorites = [];

const postFav = async (req, res) => {
  const { id, name, gender, species, origin, image, status, onClose} = req.body;
  const character = { id, name, gender, species, origin, image, status, onClose };
  myFavorites.push(character);
  res.status(200).json(myFavorites);
};

const deleteFav = async (req, res) => {
  const { id } = req.params;
  myFavorites = myFavorites.filter((fav) => fav.id !== Number(id));
  res.status(200).json(myFavorites);
};

module.exports = { postFav, deleteFav };
