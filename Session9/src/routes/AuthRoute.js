const express = require("express");
const { register, login } = require("../Controller/AuthController");
const { Authenticate } = require("../Middleware/Authentication");
const router = express.Router();

router.get("/register", register);
router.get("/login", login);

module.exports = router;
