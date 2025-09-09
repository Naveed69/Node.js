const express = require("express");
const { addUser } = require("../Controller/DbController");
const userInputValidator = require("../Middleware/inputValidation/newuserInputvalidation");
const router = express.Router();

router.get("/newUser/", userInputValidator, addUser);

module.exports = router;
