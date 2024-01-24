const { Router } = require("express");
const getCharByIdControl = require("../controllers/getCharByIdControl");
const loginControl = require("../controllers/loginControl");
const {
  favoritesDeleteHandler,
  favoritesPostHandler,
} = require("../handlers/favoritesHandler");

const characterRouter = Router();

characterRouter.get("/:id", async (req, res) => {
  try {
    const character = await getCharByIdControl(req.params.id);
    res.status(200).json(character);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

characterRouter.get("", async (req, res) => {
  try {
    const valorLogin = await loginControl(req.query);
    res.status(200).json(valorLogin);
  } catch (error) {
    res.status(403).json(error.message);
  }
});

characterRouter.post("/", favoritesPostHandler);
characterRouter.delete("/:id", favoritesDeleteHandler);

module.exports = characterRouter;
