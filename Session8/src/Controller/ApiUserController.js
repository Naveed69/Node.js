const userData = require("../../userData");
const { ApiUserServices } = require("../Services/ApiUser_Service");

const AllUsers = (req, res) => {
  const response = ApiUserServices.getAllUsers();
  res.send(response);
};

const GetUserById = (req, res) => {
  const id = req.params.userId;
  const user = userData.data.find((user) => user.id === Number(id));
  if (user) res.status(200).json(user);
  else
    res
      .status(400)
      .json({ message: `User not found check mentioned id:${id} is correct` });
};

const GetUserByGender = (req, res) => {
  const gender = req.query.gender;
  const user = userData.data.filter((user) => user.gender === gender);
  if (user.length > 0) res.status(200).json(user);
  else
    res.status(400).json({
      message: `User not found check mentioned Gender:${gender} is correct`,
    });
};

module.exports = { AllUsers, GetUserById, GetUserByGender };
