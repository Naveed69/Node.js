const express = require("express");
const {
  alluserData,
  searchUserByGender,
  searchUserByName,
} = require("../Controllers/APIControllers");
const router = express.Router();

router.get("/userdata", alluserData);
router.get("/search", searchUserByGender);
router.get("/:username", searchUserByName);

module.exports = router;

/*
curl --location 'localhost:3000/api/v1/user/userdata' \--header 'Authorization: Naveed'
*/
