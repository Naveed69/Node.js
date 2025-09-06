const userService = require("../Services/userService");
const usermodel = require("../Models/user.model");
const addUser = async (req, res) => {
  const { fullName, username, email } = req.body;
  try {
    const response = await userService.createNewUser(fullName, username, email);
    res
      .status(200)
      .json({ message: "new user is successfully created", response });
  } catch (err) {
    if (err.code === 11000) {
      const field = Object.keys(err.keyPattern)[0];
      res.status(409).json({
        message: "Failed to create new user",
        reason: `${field} Already Exists in DB`,
      });
    } else res.status(500).json({ message: "Failed to create new user", err });
  }
};

const getAllusers = async (req, res) => {
  try {
    const response = await usermodel.find();
    if (response.length === 0) {
      res.status(404).json({ message: "No Users found" });
    } else res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ message: "Can't fetch the details", err });
  }
};

const getUserByiD = async (req, res) => {
  const username = req.params.username;
  try {
    const response = await usermodel.find({ username: username });
    if (response.length > 0) res.status(200).json(response);
    else res.status(404).json({ message: "User not found!", username });
  } catch (err) {
    res.status(500).json({ message: "User not found", err });
  }
};

module.exports = { addUser, getAllusers, getUserByiD };
