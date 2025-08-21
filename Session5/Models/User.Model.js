const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: string,
      required: true,
      trim: true,
    },
    userName: {
      type: string,
      required: true,
      trim: true,
    },
    age: {
      type: Number,
      required: true,
      min: 18,
      trim: true,
    },
    email: {
      type: string,
      required: true,
      trim: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = { User };
