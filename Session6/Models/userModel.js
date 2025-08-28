const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
});

const user = mongoose.model("user", userSchema);
module.exports = user;
