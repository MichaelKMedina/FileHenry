const { Router } = require("express");
const countriesRouter = require("./countriesRouter");
const router = Router();

router.use("/countries", countriesRouter);

module.exports = router;
