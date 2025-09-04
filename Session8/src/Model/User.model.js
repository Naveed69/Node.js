const { string } = require("joi");
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
    unique: true,
  },
  state: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    trim: true,
  },
});

const User = mongoose.model("user", userSchema);

module.exports = { User };
