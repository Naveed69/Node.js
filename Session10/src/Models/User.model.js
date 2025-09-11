const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  username: {
    type: String,
    require: true,
    unique: true,
  },
  age: {
    type: Number,
    require: true,
    maxlength: 3,
  },
  email: {
    type: String,
    unique: true,
    require: true,
    validate: {
      validator: function (v) {
        // Regular expression for email validation
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: "Please enter a valid email address",
    },
  },
  password: {
    type: String,
    trim: true,
  },
});

const userdbmodel = mongoose.model("userdata", userSchema);

module.exports = { userdbmodel };
