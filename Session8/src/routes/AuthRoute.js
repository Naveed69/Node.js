const express = require("express");
const { register, login } = require("../Controller/AuthController");
const router = express.Router();

router.get("/register", register);
router.post("/login", login);

module.exports = router;
