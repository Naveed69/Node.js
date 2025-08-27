const express = require("express");
const {
  Service,
  Fitness,
  Contact,
  Home,
} = require("../Controller/HomeController");
const { Authorize } = require("../MiddleWare/Authorization");
const router = express.Router();

router.get("/", Home);
router.get("/contact", Contact);
router.get("/fitness", Fitness);
router.get("/services", Service);

module.exports = router;
