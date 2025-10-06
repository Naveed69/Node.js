const express = require("express");
const {
  getUsers,
} = require("../Controllers/UserDataLocal.Controller/UserFeatch.Controller");
const {
  getUsersById,
} = require("../Controllers/UserDataLocal.Controller/UserFeatchById.Controller");
const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUsersById);

module.exports = router;
