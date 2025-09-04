const userData = require("../../userData");

const AllUsers = (req, res) => {
  res.send(userData.data);
};

const GetUserById = (req, res) => {
  const id = req.params.userId;
  const user = userData.data.find((user) => user.id === Number(id));
  res.status(200).json(user);
};

const GetUserByGender = (req, res) => {
  const gender = req.query.gender;
  const user = userData.data.filter((user) => user.gender === gender);
  res.status(200).json(user);
};

module.exports = { AllUsers, GetUserById, GetUserByGender };
