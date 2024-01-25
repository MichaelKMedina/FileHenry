const { Router } = require("express");
const getCharByIdControl = require("../controllers/getCharByIdControl");
const loginControl = require("../controllers/loginControl");
const {
  postFav, deleteFav
} = require("../controllers/favoritesControl");

const characterRouter = Router();

characterRouter.get("/:id", async (req, res) => {
  try {
    const character = await getCharByIdControl(req.params.id);
    res.status(200).json(character);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

characterRouter.get("", (req, res) => {
  try {
    const valorLogin = loginControl(req.query);
    res.status(200).json(valorLogin);
  } catch (error) {
    res.status(403).json(error.message);
  }
});

characterRouter.post("/", (req, res) => {
  try {
    const character = postFav(req.body);
    res.status(200).json(character);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

characterRouter.delete("/:id", (req, res) => {
  try {
    const character = deleteFav(req.params.id);
    res.status(200).json(character);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = characterRouter;
