const express = require("express");
const {
  GetAllUsers,
  GetUserById,
  SearchByGender,
} = require("../Controller/UserApiController");
const { Authorize } = require("../MiddleWare/Authorization");
const { addUser } = require("../Controller/UserSchemaController");
const router = express.Router();

router.get("/allusers", Authorize, GetAllUsers);
router.get("/user/:id", Authorize, GetUserById);
router.get("/search", Authorize, SearchByGender);
router.post("/adduser", Authorize, addUser);

module.exports = router;
