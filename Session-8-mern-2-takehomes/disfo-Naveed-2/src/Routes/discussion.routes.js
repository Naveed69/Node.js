const express = require("express");
const router = express.Router;

router.post("/new");
router.get("/all1");
router.get("/user/:username");
router.get("/id/:id");

module.exports = router;
