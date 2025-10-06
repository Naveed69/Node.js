const userData = require("../../../userData");
const getUsers = (req, res) => {
  const users = userData.data;
  res.status(200).json(users);
};

module.exports = { getUsers };
