const mongoose = require("mongoose");
const validator = require("validator");
const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 100,
    unique: true,
    validate: (data) => {
      return validator.isAlphanumeric(data);
    },
  },
  authors: [String],
  content: {
    type: String,
    required: true,
  },
});

const BlogModel = mongoose.model("Blog", blogSchema);

module.exports = BlogModel;
