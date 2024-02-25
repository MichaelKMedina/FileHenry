const { Router } = require("express");
const activitiesRouter = Router();
const postActivitiesControl = require("../controllers/postActivitiesControl");
const getActivitiesControl = require("../controllers/getActivitiesControl");

activitiesRouter.post("", async (req, res) => {
  const actividad = req.body;
  try {
    const response = await postActivitiesControl(actividad);
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

activitiesRouter.get("", async (req, res) => {
  try {
    const response = await getActivitiesControl();
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = activitiesRouter;
