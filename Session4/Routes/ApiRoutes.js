const express = require("express");
const {
  alluserData,
  searchUserByGender,
  searchUserByName,
} = require("../Controllers/APIControllers");
const { authorize } = require("../MiddleWare/Authorization");
const router = express.Router();

router.get("/userdata", authorize, alluserData);
router.get("/search", authorize, searchUserByGender);
router.get("/:username", authorize, searchUserByName);

module.exports = router;

/*
curl --location 'localhost:3000/api/v1/user/userdata' \--header 'Authorization: Naveed'
*/
