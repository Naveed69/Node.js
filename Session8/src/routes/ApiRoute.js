const express = require("express");
const { AllUsers, GetUserById } = require("../Controller/ApiUserController");
const router = express.Router();

router.get("/users", AllUsers);
router.get("/user/:userId", GetUserById);

module.exports = router;
