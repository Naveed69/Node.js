const express = require("express");
const {
  getAllUsers,
  getuserById,
  getUserByGender,
} = require("../Controllers/UserApi.Controller");
const router = express.Router();

router.get("/users", getAllUsers);

router.get("/id/:id", getuserById);

router.get("/user/gender", getUserByGender);

module.exports = router;
