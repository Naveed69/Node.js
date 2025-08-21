const BlogModel = require("../Models/Blog.model");

async function createBlog(req, res) {
  const body = req.body;
  const title = body.title;
  const content = body.content;

  //object creation
  const blogObj = BlogModel({
    title,
    content,
  });

  //save to the db

  try {
    const response = await blogObj.save();
    res.status(200).json(response);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
}
function getAllBlog(req, res) {
  res.send("All Blog");
}
function getBlogById(req, res) {
  res.send("Blog by ID ");
}
function deleteBlogById(req, res) {
  res.send("Deleted Blog");
}
module.exports = { createBlog, getAllBlog, getBlogById, deleteBlogById };
