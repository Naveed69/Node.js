const express = require("express");
const {
  newDiscussion,
  getAllDiscussion,
  getDiscussionByUser,
  getDiscussionById,
} = require("../Controllers/Discussions.controller");
const router = express.Router();

router.post("/new", newDiscussion);
router.get("/all1", getAllDiscussion);
router.get("/user/:username", getDiscussionByUser);
router.get("/id/:id", getDiscussionById);

module.exports = router;
