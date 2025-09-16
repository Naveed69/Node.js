const express = require("express");
const {
  getAllUsers,
  getuserById,
  getUserByGender,
} = require("../Controllers/UserApi.Controller");
const router = express.Router();

const passport = require("passport");
// const authMiddlewareJWT = passport.authenticate("jwt", { session: false,failureRedirect: "/users", });

const authMiddlewareJWT = passport.authenticate("jwt", {
  session: false,
  failureRedirect: "/users",
});

router.get("/users", getAllUsers);

router.get("/id/:id", authMiddlewareJWT, getuserById);

router.get("/user/gender", getUserByGender);

module.exports = router;
