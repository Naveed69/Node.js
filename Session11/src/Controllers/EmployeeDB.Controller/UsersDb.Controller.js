const { AuthenticationSevices } = require("../../Services/Auth.Services");
const { UsersDbServices } = require("../../Services/UserDb.Services");

const getAllUsers = (req, res) => {};

const addNewUser = async (req, res) => {
  const user = req.body;
  try {
    const response = await UsersDbServices.addUser(user);
    res.status(200).json({ message: "user has been added", response });
  } catch (err) {
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const deleteUser = (req, res) => {};

//login
const usersLogin = async (req, res) => {
  const { name, password } = req.body;
  try {
    const reponse = await AuthenticationSevices.loginService(name, password);
    res.status(200).json(reponse);
  } catch (err) {
    res.status(err.statusCode || 500).json(err.message);
  }
};

module.exports = { getAllUsers, addNewUser, deleteUser, usersLogin };
