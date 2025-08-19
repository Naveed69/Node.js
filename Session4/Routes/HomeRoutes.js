const express = require("express");
const {
  homeResponse,
  contactDetails,
} = require("../Controllers/HomeController");
const router = express.Router();

router.get("/todos", homeResponse);
router.get("/", homeResponse);
router.get("/contact", contactDetails);

module.exports = router;
