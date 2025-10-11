const express = require("express");
const {
  getAllUsers,
  addNewUser,
  deleteUser,
} = require("../Controllers/EmployeeDB.Controller/UsersDb.Controller");
const router = express.Router();

router.get("/users/", getAllUsers);
router.post("/users/", addNewUser);
router.delete("/users/:id", deleteUser);

module.exports = router;
