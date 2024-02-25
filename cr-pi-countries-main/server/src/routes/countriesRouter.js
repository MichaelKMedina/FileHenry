const { Router } = require("express");
const countriesRouter = Router();
const getCountriesControl = require("../controllers/getCountriesControl");
const getByIdCountriesControl = require("../controllers/getByIdCountriesControl");
const getByNameCountriesControl = require("../controllers/getByNameCountriesControl");

countriesRouter.get("", async (req, res) => {
  try {
    const response = await getCountriesControl();
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

countriesRouter.get("/name", async (req, res) => {
  try {
    const response = await getByNameCountriesControl(req.query);
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

countriesRouter.get("/:idPais", async (req, res) => {
  const id = req.params.idPais;
  try {
    const response = await getByIdCountriesControl(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = countriesRouter;
