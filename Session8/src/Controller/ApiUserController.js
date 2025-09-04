const userData = require("../../userData");
const { ApiUserServices } = require("../Services/ApiUser_Service");

const AllUsers = (req, res) => {
  const response = ApiUserServices.getAllUsers();
  res.send(response);
};

const GetUserById = (req, res) => {
  const id = req.params.userId;
  const response = ApiUserServices.userById(id);
  if (response) res.status(200).json(response);
  else
    res
      .status(400)
      .json({ message: `User not found check mentioned id:${id} is correct` });
};

const GetUserByGender = (req, res) => {
  const gender = req.query.gender;
  const user = ApiUserServices.userByGender(gender);
  if (user.length > 0) res.status(200).json(user);
  else
    res.status(400).json({
      message: `User not found check mentioned Gender:${gender} is correct`,
    });
};

module.exports = { AllUsers, GetUserById, GetUserByGender };
