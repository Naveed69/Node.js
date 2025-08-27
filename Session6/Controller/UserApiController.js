const userData = require("../userData");
const GetAllUsers = (req, res) => {
  res.send(userData.data);
};

const GetUserById = (req, res) => {
  const id = req.params.id;
  const user = userData.data.filter((user) => user.id == id);
  if (user.length === 0) {
    return res.status(404).send({ message: "User not found with given id" });
  } else res.send(user);
};

const SearchByGender = (req, res) => {
  const userGender = req.query.gender;
  const user = userData.data.filter((user) => user.gender === userGender);
  if (user.length > 0) res.send(user);
  else res.status(404).send({ message: "No user found with given gender" });
};

module.exports = { GetAllUsers, GetUserById, SearchByGender };
