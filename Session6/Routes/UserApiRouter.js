const express = require("express");
const {
  GetAllUsers,
  GetUserById,
  SearchByGender,
} = require("../Controller/UserApiController");
const { Authorize } = require("../MiddleWare/Authorization");
const {
  addUser,
  GetUserByIdFromDB,
  UpdateUser,
  deleteUser,
} = require("../Controller/UserSchemaController");
const userInputValidator = require("../MiddleWare/InputValidator/UserInputValidator");
const router = express.Router();

router.get("/allusers", Authorize, GetAllUsers);
router.get("/user/:id", Authorize, GetUserById);
router.get("/search", Authorize, SearchByGender);
//MongoDb routes
router.post("/adduser", Authorize, userInputValidator, addUser);
router.get("/getuser/:id", Authorize, GetUserByIdFromDB);
router.put("/updateUser/:id", Authorize, UpdateUser);
router.delete("/deleteUser/:id", Authorize, deleteUser);

module.exports = router;
