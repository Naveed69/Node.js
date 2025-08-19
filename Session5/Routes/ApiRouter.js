const express = require("express");
const router = express.Router();
const {
  ApiCall,
  ApiSearchUser,
  ApiCallAllUsers,
  ApiGenderSearch,
} = require("../Controllers/Api_Controller");

router.get("/", ApiCall);
router.get("/allUser", ApiCallAllUsers);
router.get("/search", ApiGenderSearch);
router.get("/:name", ApiSearchUser);

module.exports = router;
