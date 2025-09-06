const express = require("express");
const {
  addUser,
  getAllusers,
  getUserByiD,
} = require("../Controllers/UserController");
const Authorize = require("../MiddleWare/Authorization");
const {
  userinputValidator,
} = require("../MiddleWare/InputValidator/UserInputValidator");
const router = express.Router();

router.post("/user/resgistrtion", userinputValidator, addUser);
router.get("/user/all", Authorize, getAllusers);
router.get("/user/:username", getUserByiD);
module.exports = router;
