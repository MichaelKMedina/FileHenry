let myFavorites = [];

const postFav = (body) => {
  const { id, name, gender, species, origin, image, status, onClose} = body;
  const character = { id, name, gender, species, origin, image, status, onClose };
  myFavorites.push(character);
  return myFavorites;
};

const deleteFav = (id) => {
  myFavorites = myFavorites.filter((fav) => fav.id !== Number(id));
  return myFavorites;
};

module.exports = { postFav, deleteFav };
