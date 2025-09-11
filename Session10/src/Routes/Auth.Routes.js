const express = require("express");
const Login = require("../Controllers/Auth.Controller");
const router = express.Router();

router.get("/login", Login);

module.exports = router;
