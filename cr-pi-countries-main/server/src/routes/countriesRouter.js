const { Router } = require("express");
const countriesRouter = Router();
const getCountriesController = require("../controllers/getCountriesController");

countriesRouter.get("", async (req, res) => {
  try {
    const response = await getCountriesController();
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = countriesRouter;
