const express = require("express");
const {
  updateUser,
  addUser,
  getUser,
  deleteUser,
} = require("../Controllers/UserDb.Controller");
const {
  userDataInputValidate,
} = require("../Middleware/inputValidation/userDataInputvalidation");
const router = express.Router();

router.post("/newuser", userDataInputValidate, addUser);
router.get("/get/:username", getUser);
router.put("/updateuser/:username", updateUser);
router.delete("/deleteuser", deleteUser);

module.exports = router;
