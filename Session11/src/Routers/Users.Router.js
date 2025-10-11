const express = require("express");
const {
  getUsers,
} = require("../Controllers/UserDataLocal.Controller/UserFeatch.Controller");
const {
  getUsersById,
} = require("../Controllers/UserDataLocal.Controller/UserFeatchById.Controller");
const router = express.Router();

router.get("/users", getUsers);
router.get("/users/:id", getUsersById);

module.exports = router;
