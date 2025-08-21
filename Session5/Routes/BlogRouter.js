const express = require("express");
const {
  createBlog,
  getAllBlog,
  getBlogById,
  deleteBlogById,
} = require("../Controllers/BlogController");
const router = express.Router();

router.post("/newBlog", createBlog);
router.get("/getAllBlog", getAllBlog);
router.get("/getBlog/:id", getBlogById);
router.delete("/delete/:id", deleteBlogById);

module.exports = router;
