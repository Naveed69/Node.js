const { UserDBServices } = require("../Services/UserDb.Services");

const addUser = async (req, res) => {
  const body = req.body;
  try {
    const response = await UserDBServices.addNewUser(body);
    res.status(201).json({ message: "user added successfully", response });
  } catch (err) {
    // res.send(err.code);
    res.status(err.statusCode || 500).json({
      message: err.message || "Something went wrong while adding user",
    });
  }
};

const updateUser = async (req, res) => {
  const username = req.params.username;
  const body = req.body;
  try {
    const response = await UserDBServices.updateUser(body, username);
    res
      .status(200)
      .json({ message: `user: ${username} details updated`, response });
  } catch (err) {
    res.status(500).json({ message: `Can't update user: ${username}`, err });
  }
};

const getUser = async (req, res) => {
  const username = req.params.username;
  try {
    const response = await UserDBServices.getUser(username);
    res.status(200).json({ message: "sucssesfully fetched user", response });
  } catch (err) {
    res.status(500).json({ message: `user: ${username} not found` });
  }
};

const deleteUser = async (req, res) => {
  const username = req.body.username;
  try {
    const response = await UserDBServices.deleteUser(username);
    res.status(200).json({ message: "user deleted", response });
  } catch (err) {
    res.status(500).json({ messsage: `Can't delete ${username}` });
  }
};

module.exports = { updateUser, getUser, deleteUser, addUser };
