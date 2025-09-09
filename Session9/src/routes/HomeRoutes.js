const express = require("express");
const {
  Home,
  HomeContact,
  HomeFitness,
} = require("../Controller/HomeController");
const router = express.Router();

router.get("/", Home);
router.get("/contact", HomeContact);
router.get("/fitness", HomeFitness);

module.exports = router;
