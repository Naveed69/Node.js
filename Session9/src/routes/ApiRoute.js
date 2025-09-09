const express = require("express");
const {
  AllUsers,
  GetUserById,
  GetUserByGender,
} = require("../Controller/ApiUserController");
const router = express.Router();

router.get("/users", AllUsers);
router.get("/user/:userId", GetUserById);
router.get("/search", GetUserByGender);

module.exports = router;
