const { user } = require("../Models/userModel");
const UserAddService = require("../Services/UserAddService");

const addUser = async (req, res) => {
  const { name, age, mobile, branch } = req.body;
  try {
    const response = await UserAddService.createUser(name, age, mobile, branch);
    res.status(200).json({ message: "User added successfully", response });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const GetUserByIdFromDB = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const userData = await user.findById(id);
    res.status(200).json({ message: "User fetched successfully", userData });
  } catch (err) {
    res
      .status(500)
      .json({ message: "User Not Found please check id", err: err.message });
  }
};

const UpdateUser = async (req, res) => {
  const id = req.params.id;
  const { age, branch } = req.body;
  try {
    const updatedUser = await user.findByIdAndUpdate(id, { age, branch });
    res.status(200).json({ message: "User updated successfully", updatedUser });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    const deletedUser = await user.findByIdAndDelete(id);
    res.status(200).json({ message: "user deleted", deletedUser });
  } catch (err) {
    res.status(500).json({
      message: "User Not Found can't able to delete",
      err: err.message,
    });
  }
};

module.exports = { addUser, GetUserByIdFromDB, UpdateUser, deleteUser };
