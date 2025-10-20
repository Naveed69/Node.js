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
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return v.toString().length === 10;
      },
      message: (props) => `${props.value} must be 10 digit long!`,
    },
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.index({ mobile: 1 }, { unique: true });

const userModel = mongoose.model("UserDb", userSchema);

module.exports = { userModel };
