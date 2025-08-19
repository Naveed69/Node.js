const express = require("express");
const {
  ContactCotroller,
  HomeCotroll,
} = require("../Controllers/HomeController");
const router = express.Router();

router.get("/", HomeCotroll);
router.get("/contact", ContactCotroller);

module.exports = router;
