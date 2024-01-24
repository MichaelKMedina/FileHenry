const { Router } = require("express");
const router = Router();
const characterRouter = require("./characterRouter");

router.use("/character", characterRouter);
router.use("/login", characterRouter);
router.use("/fav", characterRouter);

module.exports = router;
