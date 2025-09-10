const {
  fetchAllUsers,
  fetchUserById,
  fetchUserByGender,
} = require("../Services/Users.Services");

const getAllUsers = (req, res) => {
  try {
    const response = fetchAllUsers();
    res.send(response);
  } catch (err) {
    res.status(400).json({ message: "Can't fetch the users" });
  }
};

const getuserById = (req, res) => {
  try {
    const response = fetchUserById(req.params.id);
    res.send(response);
  } catch (err) {
    res
      .status(403)
      .json({ message: `User with id: ${req.params.id} not found` });
  }
};

const getUserByGender = (req, res) => {
  const gender = req.query.gender;
  try {
    const response = fetchUserByGender(gender);
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ message: `User not found by gender: ${gender}` });
  }
};

module.exports = { getAllUsers, getuserById, getUserByGender };
