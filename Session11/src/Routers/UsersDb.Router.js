const express = require("express");
const {
  getAllUsers,
  addNewUser,
  deleteUser,
  usersLogin,
} = require("../Controllers/EmployeeDB.Controller/UsersDb.Controller");
const {
  UserDetailsInputValidate,
} = require("../Middleware/UserInputValidator/UserInputValidator");

const router = express.Router();

router.get("/users/", getAllUsers);
router.get("/users/login", usersLogin);
router.post("/users/", UserDetailsInputValidate, addNewUser);
router.delete("/users/:id", deleteUser);

module.exports = router;
