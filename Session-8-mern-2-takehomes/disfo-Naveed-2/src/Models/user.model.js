const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    maxlength: 50,
    default: "",
  },
  username: {
    type: String,
    unique: true,
    required: true,
    maxlength: 25,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator: function (v) {
        // Regular expression for email validation
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: "Please enter a valid email address",
    },
  },
});

const usermodel = mongoose.model("user-data", userSchema);

module.exports = usermodel;
