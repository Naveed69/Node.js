const express = require("express");
const { addUser } = require("../Controller/DbController");
const router = express.Router();

router.get("/newUser/", addUser);

module.exports = router;
