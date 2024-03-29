const { Router } = require("express");
const activitiesRouter = require("./activitiesRouter");
const countriesRouter = require("./countriesRouter");
const router = Router();

router.use("/countries", countriesRouter);
router.use("/activities", activitiesRouter);

module.exports = router;
