const BlogModel = require("../Models/Blog.model");

const createBlog = async (req, res) => {
  const { title, content } = req.body;
  console.log(req.body);

  //object creation
  const blogObj = BlogModel({ title, content });

  //save to the db
  try {
    const response = await blogObj.save();
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ message: "Cant enter data in DB", err });
  }
};
const getAllBlog = async (req, res) => {
  try {
    const response = await BlogModel.find({});
    res.status(200).json(response);
  } catch (err) {
    res
      .status(404)
      .send({ message: "Could Not Fetch Blogs from DB", error }, err);
  }
};
const getBlogById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await BlogModel.find({ _id: id });
    if (response.length > 0) res.status(200).json({ message: response });
    else res.status(404).json({ message: "Data is not available" });
  } catch (err) {
    res.status(404).json({ message: "Data is not available", err });
  }
};
const deleteBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const response = await BlogModel.deleteOne({ _id: id });
    if (response.deletedCount > 0) res.status(200).json({ message: response });
    else res.status(404).json({ message: "Can't delete at the movement" });
  } catch (err) {
    res.status(404).json({ message: "Please provide valid ID" });
  }
};
module.exports = { createBlog, getAllBlog, getBlogById, deleteBlogById };
